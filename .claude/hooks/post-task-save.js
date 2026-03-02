#!/usr/bin/env node
// Post-Task Save Hook
// Saves subagent (Task tool) output to memory/sessions/subagents/
// so research and plan outputs survive context compaction.

const fs = require('fs');
const path = require('path');

let data = '';
process.stdin.on('data', c => data += c);
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(data);

    // Only process Task tool completions
    if (input.tool_name !== 'Task') {
      process.stdout.write('{"continue": true}');
      return;
    }

    const toolInput = input.tool_input || {};
    const toolResponse = (input.tool_response || '').slice(0, 50000);
    const description = (toolInput.description || 'unknown').replace(/\s+/g, '-').slice(0, 40);

    // Skip if no meaningful output
    if (!toolResponse || toolResponse.length < 100) {
      process.stdout.write('{"continue": true}');
      return;
    }

    const projectDir = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
    const subagentDir = path.join(projectDir, 'memory', 'sessions', 'subagents');
    fs.mkdirSync(subagentDir, { recursive: true });

    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[T:]/g, '_');
    const outFile = path.join(subagentDir, `${timestamp}_${description}.md`);

    const content = [
      `# Subagent Output: ${description}`,
      '',
      `**Saved at:** ${now.toISOString()}`,
      '',
      '---',
      '',
      toolResponse
    ].join('\n');

    fs.writeFileSync(outFile, content, 'utf-8');
    process.stderr.write(`Subagent output saved to: ${outFile}\n`);
  } catch (e) {
    process.stderr.write(`Hook error: ${e.message}\n`);
  }
  process.stdout.write('{"continue": true}');
});
