#!/usr/bin/env node
// Pre-Compact Memory Save Hook
// Saves the full session transcript as a readable MD file before compaction.

const fs = require('fs');
const path = require('path');

let data = '';
process.stdin.on('data', c => data += c);
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(data);
    const sessionId = input.session_id || 'unknown';
    const transcriptPath = input.transcript_path || '';
    const trigger = input.trigger || 'unknown';
    const cwd = input.cwd || process.cwd();

    const projectDir = process.env.CLAUDE_PROJECT_DIR || cwd;
    const memoryDir = path.join(projectDir, 'memory', 'sessions');

    // Ensure directory exists
    fs.mkdirSync(memoryDir, { recursive: true });

    if (!transcriptPath || !fs.existsSync(transcriptPath)) {
      process.stderr.write('Warning: Transcript not found at ' + transcriptPath + '\n');
      process.stdout.write('{"continue": true}');
      return;
    }

    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[T:]/g, '_');
    const shortSession = sessionId.slice(0, 8);
    const outFile = path.join(memoryDir, `${timestamp}_session_${shortSession}.md`);

    // Read transcript JSONL
    const raw = fs.readFileSync(transcriptPath, 'utf-8');
    const entries = raw.split('\n').filter(l => l.trim()).map(l => {
      try { return JSON.parse(l); } catch (e) { return null; }
    }).filter(Boolean);

    const md = [];
    md.push(`# Session Memory - ${timestamp}`);
    md.push('');
    md.push(`**Session ID:** \`${sessionId}\``);
    md.push(`**Compact trigger:** ${trigger}`);
    md.push(`**Saved at:** ${now.toISOString()}`);
    md.push(`**Total messages:** ${entries.length}`);
    md.push('', '---', '');

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const role = entry.role || entry.type || 'unknown';
      const content = entry.message || entry.content || {};

      if (role === 'user') {
        md.push(`## [${i + 1}] User`);
        extractContent(content, md);
      } else if (role === 'assistant') {
        md.push(`## [${i + 1}] Assistant`);
        extractAssistantContent(content, md);
      } else {
        md.push(`## [${i + 1}] ${role.charAt(0).toUpperCase() + role.slice(1)}`);
        if (typeof content === 'object') {
          const summary = JSON.stringify(content, null, 2).slice(0, 1000);
          md.push('```json', summary, '```');
        } else if (typeof content === 'string') {
          md.push('', content.slice(0, 2000));
        }
      }
      md.push('', '---', '');
    }

    fs.writeFileSync(outFile, md.join('\n'), 'utf-8');
    process.stderr.write(`Session memory saved to: ${outFile}\n`);
  } catch (e) {
    process.stderr.write(`Hook error: ${e.message}\n`);
  }
  process.stdout.write('{"continue": true}');
});

function extractContent(content, md) {
  if (typeof content === 'string') {
    md.push('', content);
    return;
  }
  if (!content || !content.content) return;
  const blocks = Array.isArray(content.content) ? content.content : [content.content];
  for (const block of blocks) {
    if (typeof block === 'string') {
      md.push('', block);
    } else if (block && block.type === 'text') {
      md.push('', block.text || '');
    } else if (block && block.type === 'tool_result') {
      md.push('', `**Tool Result** (\`${block.tool_use_id || ''}\`):`);
      let tc = block.content || '';
      if (Array.isArray(tc)) {
        for (const t of tc) {
          if (t && t.type === 'text') {
            md.push('```', (t.text || '').slice(0, 2000), '```');
          }
        }
      } else if (typeof tc === 'string') {
        md.push('```', tc.slice(0, 2000), '```');
      }
    }
  }
}

function extractAssistantContent(content, md) {
  if (typeof content === 'string') {
    md.push('', content);
    return;
  }
  if (!content || !content.content) return;
  const blocks = Array.isArray(content.content) ? content.content : [content.content];
  for (const block of blocks) {
    if (typeof block === 'string') {
      md.push('', block);
    } else if (block && block.type === 'text') {
      md.push('', block.text || '');
    } else if (block && block.type === 'tool_use') {
      md.push('', `**Tool Call:** \`${block.name || 'unknown'}\``);
      if (block.input && typeof block.input === 'object') {
        for (const [k, v] of Object.entries(block.input)) {
          let vs = String(v);
          if (vs.length > 500) vs = vs.slice(0, 500) + '... (truncated)';
          md.push(`- \`${k}\`: ${vs}`);
        }
      }
    } else if (block && block.type === 'thinking') {
      const thinking = (block.thinking || '').slice(0, 3000);
      if (thinking) {
        md.push('', '<details><summary>Thinking</summary>', '', thinking, '', '</details>');
      }
    }
  }
}
