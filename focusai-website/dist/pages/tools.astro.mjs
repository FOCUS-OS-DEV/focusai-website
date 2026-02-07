import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CX4f0l_Y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CPo-c6EZ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Focus AI | \u05DE\u05E8\u05DB\u05D6 \u05DB\u05DC\u05D9 \u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA";
  const pageDescription = "\u05D4\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3 \u05D4\u05DE\u05E7\u05D9\u05E3 \u05DC\u05DB\u05DC\u05D9 \u05D4-AI \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD. \u05E1\u05E0\u05E0\u05D5 \u05DC\u05E4\u05D9 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4, \u05D7\u05E4\u05E9\u05D5 \u05D0\u05EA \u05D4\u05DB\u05DC\u05D9 \u05D4\u05DE\u05D5\u05E9\u05DC\u05DD \u05D5\u05E7\u05E4\u05E6\u05D5 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4.";
  const toolsData = [
    {
      name: "Claude",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8 \u05E9\u05DC Anthropic, \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF \u05D1\u05DB\u05EA\u05D9\u05D1\u05EA \u05E7\u05D5\u05D3, \u05D4\u05D1\u05E0\u05EA \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05D5\u05E8\u05DE\u05EA \u05E2\u05D1\u05E8\u05D9\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://claude.ai/"
    },
    {
      name: "Chat GPT",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8 \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D1\u05E2\u05D5\u05DC\u05DD \u05DE\u05D1\u05D9\u05EA OpenAI. \u05DE\u05D0\u05E4\u05E9\u05E8 \u05E9\u05D9\u05D7\u05D4 \u05D7\u05DB\u05DE\u05D4, \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E7\u05D1\u05E6\u05D9\u05DD, \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D5\u05E2\u05D5\u05D3.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://chat.openai.com/"
    },
    {
      name: "\u05D2'\u05DE\u05D9\u05E0\u05D9",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6\u05F3\u05D0\u05D8 \u05D4\u05D7\u05DB\u05DD \u05DE\u05D1\u05D9\u05EA \u05D2\u05D5\u05D2\u05DC",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://gemini.google.com/"
    },
    {
      name: "DeepSeek",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05DE\u05EA\u05D7\u05E8\u05D4 \u05D4\u05E1\u05D9\u05E0\u05D9 \u05E9\u05DC ChatGPT \u05E9\u05E2\u05E7\u05E3 \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05D1\u05D7\u05E0\u05D9\u05DD \u05D5\u05D6\u05DE\u05D9\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD \u05DC\u05D2\u05DE\u05E8\u05D9!",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://chat.deepseek.com/"
    },
    {
      name: "Qwen",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9 \u05DE\u05D1\u05D9\u05EA \u05E2\u05DC\u05D9\u05D1\u05D0\u05D1\u05D0. \u05D9\u05D5\u05D3\u05E2 \u05D2\u05DD \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://chat.qwenlm.ai/"
    },
    {
      name: "Grok",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05DE\u05D5\u05D3\u05DC \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E9\u05DC \u05D0\u05D9\u05DC\u05D5\u05DF \u05DE\u05D0\u05E1\u05E7. \u05E2\u05D5\u05D1\u05D3 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DF \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D5\u05E0\u05D5\u05D8\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05E4\u05D7\u05D5\u05EA \u05DE\u05E6\u05D5\u05E0\u05D6\u05E8.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://x.com/i/grok?focus=1"
    },
    {
      name: "CoPilot",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6\u05F3\u05D0\u05D8\u05D1\u05D5\u05D8 \u05E9\u05DC \u05DE\u05D9\u05E7\u05E8\u05D5\u05E1\u05D5\u05E4\u05D8, \u05DE\u05D1\u05D5\u05E1\u05E1 \u05E2\u05DC ChatGPT \u05D5\u05DE\u05D0\u05E4\u05E9\u05E8 \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D1\u05D7\u05D9\u05E0\u05DD!",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://copilot.microsoft.com/"
    },
    {
      name: "Mistral",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05E6\u05F3\u05D0\u05D8\u05D1\u05D5\u05D8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DF \u05E9\u05DE\u05D0\u05E4\u05E9\u05E8 \u05DB\u05DE\u05E2\u05D8 \u05DC\u05DC\u05D0 \u05D4\u05D2\u05D1\u05DC\u05D4 \u05D4\u05DE\u05D5\u05DF \u05DE\u05D4\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05E9\u05D4\u05E9\u05D0\u05E8 \u05DE\u05E6\u05D9\u05E2\u05D9\u05DD \u05D1\u05DE\u05E0\u05D5\u05D9!",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://chat.mistral.ai/"
    },
    {
      name: "Perplexity",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05E6\u05F3\u05D0\u05D8\u05D1\u05D5\u05D8 \u05DE\u05D1\u05D5\u05E1\u05E1 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05DE\u05D7\u05D6\u05D9\u05E8 \u05EA\u05DE\u05D9\u05D3 \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA \u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DF \u05DE\u05D4 \u05DC\u05E7\u05D7 \u05DE\u05DB\u05DC \u05DE\u05E7\u05D5\u05E8.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://perplexity.ai/"
    },
    {
      name: "Meta AI",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6\u05F3\u05D0\u05D8\u05D1\u05D5\u05D8 \u05E9\u05DC \u05DE\u05D8\u05D0 (\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7), \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D5\u05E2\u05D5\u05DE\u05D3 \u05DE\u05D5\u05DC \u05D4\u05DE\u05EA\u05D7\u05E8\u05D9\u05DD \u05D1\u05DB\u05DC \u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05DF.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://www.meta.ai/"
    },
    {
      name: "NotebookLM",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05DE\u05D5\u05D3\u05DC \u05E9\u05D9\u05D5\u05D3\u05E2 \u05DC\u05E7\u05DC\u05D5\u05D8 \u05DB\u05DE\u05D5\u05EA \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D4 \u05D5\u05DC\u05D4\u05E4\u05D9\u05E7 \u05D1\u05EA\u05D5\u05DB\u05DD \u05EA\u05D5\u05D1\u05E0\u05D5\u05EA \u05D5\u05D0\u05E4\u05D9\u05DC\u05D5 \u05E4\u05D5\u05D3\u05E7\u05D0\u05E1\u05D8!",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://notebooklm.google.com/"
    },
    {
      name: "Le Chat",
      category: "\u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D4\u05E6\u05F3\u05D0\u05D8\u05D1\u05D5\u05D8 \u05E9\u05DC Mistral \u05D1\u05DE\u05E8\u05D0\u05D4 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05E2\u05DD \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05DB\u05DE\u05D5 \u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://chat.mistral.ai/chat"
    },
    {
      name: "MidJourney",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DB\u05DC\u05D9 \u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1 \u05D5\u05D4\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9 \u05D1\u05E9\u05D5\u05E7 \u05DB\u05D9\u05D5\u05DD. \u05E2\u05D5\u05D1\u05D3 \u05D3\u05E8\u05DA \u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E2\u05D8 \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC\u05EA \u05D0\u05DA \u05D4\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E9\u05D5\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://www.midjourney.com/"
    },
    {
      name: "DALL\xB7E",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC OpenAI, \u05DE\u05D5\u05D1\u05E0\u05D4 \u05D1\u05EA\u05D5\u05DA ChatGPT \u05D0\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05D2\u05E9\u05EA \u05D2\u05DD \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://openai.com/index/dall-e-3/"
    },
    {
      name: "Leonardo AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DB\u05DC\u05D9 \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9 \u05E2\u05DD \u05DE\u05DE\u05E9\u05E7 \u05E0\u05D5\u05D7 \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05DC\u05E9\u05DC\u05D9\u05D8\u05D4 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D9\u05E6\u05D9\u05E8\u05D4.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://leonardo.ai/"
    },
    {
      name: "Ideogram",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DB\u05DC\u05D9 \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D8\u05E7\u05E1\u05D8! \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1 \u05DB\u05D9\u05D5\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05E2\u05DD \u05DB\u05D9\u05EA\u05D5\u05D1 \u05D0\u05D5 \u05DC\u05D5\u05D2\u05D5\u05D0\u05D9\u05DD.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://ideogram.ai/"
    },
    {
      name: "Flux",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D4\u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7. \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D2\u05E8\u05E1\u05D0\u05D5\u05EA \u05D1\u05D7\u05D9\u05E0\u05DD \u05D5\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD \u05E2\u05DD \u05D4\u05D1\u05D3\u05DC\u05D9 \u05D0\u05D9\u05DB\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://replicate.com/black-forest-labs/flux-schnell"
    },
    {
      name: "Stable Diffusion",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DE\u05D5\u05D3\u05DC \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05E2\u05DC\u05D9\u05D5 \u05DE\u05D1\u05D5\u05E1\u05E1\u05D9\u05DD \u05D4\u05E8\u05D1\u05D4 \u05DE\u05D5\u05D3\u05DC\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DC \u05D4\u05EA\u05E2\u05E9\u05D9\u05D9\u05D4.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://stability.ai/stable-image"
    },
    {
      name: "Recraft",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DE\u05D5\u05D3\u05DC \u05DE\u05E6\u05D5\u05D9\u05D9\u05DF \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05DB\u05DE\u05D5 \u05D5\u05E7\u05D8\u05D5\u05E8\u05D9\u05DD, \u05DC\u05D5\u05D2\u05D5\u05D0\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.recraft.ai/"
    },
    {
      name: "Krea AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05D9\u05DB\u05D5\u05DC\u05EA \u05E2\u05E8\u05D9\u05DB\u05D4 \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.krea.ai/"
    },
    {
      name: "Playground AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DE\u05DE\u05E9\u05E7 \u05E0\u05D5\u05D7 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05DE\u05D2\u05D5\u05D5\u05DF \u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://playground.com/"
    },
    {
      name: "Adobe Firefly",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DB\u05DC\u05D9 \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC Adobe \u05D4\u05DE\u05E9\u05EA\u05DC\u05D1 \u05E2\u05DD \u05DE\u05D5\u05E6\u05E8\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D5\u05DE\u05EA\u05D0\u05DE\u05DF \u05E8\u05E7 \u05E2\u05DC \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D7\u05D5\u05E7\u05D9\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://firefly.adobe.com/"
    },
    {
      name: "Sora",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DC OpenAI. \u05D9\u05E6\u05D9\u05E8\u05EA \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05DE\u05D8\u05E7\u05E1\u05D8 \u05D0\u05D5 \u05EA\u05DE\u05D5\u05E0\u05D4. \u05E8\u05DE\u05EA \u05E8\u05D9\u05D0\u05DC\u05D9\u05D6\u05DD \u05D2\u05D1\u05D5\u05D4\u05D4.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://sora.com/"
    },
    {
      name: "Runway",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E2\u05DD AI. \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05D2\u05DD \u05DC\u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D4 \u05D5\u05D4\u05E4\u05E7\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://runwayml.com/"
    },
    {
      name: "Kling AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E1\u05D9\u05E0\u05D9 \u05DE\u05E8\u05E9\u05D9\u05DD \u05E2\u05DD \u05D2\u05E8\u05E1\u05D4 \u05D7\u05D9\u05E0\u05DE\u05D9\u05EA \u05E0\u05D3\u05D9\u05D1\u05D4. \u05D0\u05D9\u05DB\u05D5\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4 \u05D5\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://klingai.com/"
    },
    {
      name: "Pika",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DB\u05DC\u05D9 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05DC\u05D9\u05E4\u05D9\u05DD \u05E7\u05E6\u05E8\u05D9\u05DD \u05D5\u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05DE\u05D8\u05E7\u05E1\u05D8 \u05D0\u05D5 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05E2\u05DD \u05DE\u05DE\u05E9\u05E7 \u05E0\u05D5\u05D7.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://pika.art/"
    },
    {
      name: "Luma Dream Machine",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05D1\u05E1\u05D2\u05E0\u05D5\u05DF \u05E7\u05D5\u05DC\u05E0\u05D5\u05E2\u05D9 \u05E2\u05DD \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05DE\u05E6\u05DC\u05DE\u05D4 \u05DE\u05E8\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05D8\u05D1\u05E2\u05D9\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://lumalabs.ai/dream-machine"
    },
    {
      name: "Hailuo AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E1\u05D9\u05E0\u05D9 \u05E0\u05D5\u05E1\u05E3 \u05E2\u05DD \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E8\u05D9\u05D0\u05DC\u05D9\u05E1\u05D8\u05D9\u05D5\u05EA \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DC\u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05D0\u05E0\u05D5\u05E9\u05D9\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://hailuoai.video/"
    },
    {
      name: "Vidu",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DB\u05DC\u05D9 \u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E2\u05DD \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E7\u05D5\u05E0\u05E1\u05D9\u05E1\u05D8\u05E0\u05D8\u05D9\u05D5\u05EA \u05D5\u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D3\u05DE\u05D5\u05D9\u05D5\u05EA \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E1\u05E8\u05D8\u05D5\u05DF.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.vidu.studio/"
    },
    {
      name: "Haiper",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D5\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05DD \u05D3\u05D2\u05E9 \u05E2\u05DC \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA \u05DE\u05D2\u05D5\u05D5\u05E0\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://haiper.ai/"
    },
    {
      name: "Pixverse",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D0\u05E4\u05E7\u05D8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05D5\u05DE\u05E2\u05D1\u05E8\u05D9\u05DD \u05D9\u05E6\u05D9\u05E8\u05EA\u05D9\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://pixverse.ai/"
    },
    {
      name: "Synthesia",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D4\u05E4\u05E7\u05EA \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9 \u05D4\u05E1\u05D1\u05E8 \u05E2\u05DD \u05D0\u05D5\u05D5\u05D0\u05D8\u05E8\u05D9\u05DD \u05D3\u05D5\u05D1\u05E8\u05D9\u05DD. \u05DE\u05D5\u05E9\u05DC\u05DD \u05DC\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9 \u05D4\u05D3\u05E8\u05DB\u05D4 \u05D5\u05E9\u05D9\u05D5\u05D5\u05E7.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://www.synthesia.io/"
    },
    {
      name: "HeyGen",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05E2\u05DD \u05D0\u05D5\u05D5\u05D0\u05D8\u05E8\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05D5\u05D9\u05DB\u05D5\u05DC\u05EA \u05EA\u05E8\u05D2\u05D5\u05DD \u05D5\u05D3\u05D9\u05D1\u05D5\u05D1.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.heygen.com/"
    },
    {
      name: "D-ID",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D4\u05E4\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05D5\u05D5\u05D9\u05D3\u05D0\u05D5 \u05DE\u05D3\u05D1\u05E8. \u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05D5\u05D5\u05D0\u05D8\u05E8\u05D9\u05DD \u05DE\u05DE\u05E9 \u05D0\u05D5 \u05DE\u05D5\u05E0\u05E4\u05E9\u05D9\u05DD.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.d-id.com/"
    },
    {
      name: "Invideo AI",
      category: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DB\u05DC\u05D9 \u05E4\u05E9\u05D5\u05D8 \u05DC\u05D4\u05E4\u05E7\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9 \u05DE\u05D4\u05D9\u05E8. \u05DE\u05E1\u05E4\u05D9\u05E7 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DC\u05E7\u05D1\u05DC \u05E1\u05E8\u05D8\u05D5\u05DF \u05DE\u05D5\u05DB\u05DF.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://invideo.io/"
    },
    {
      name: "ElevenLabs",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05DE\u05D5\u05D3\u05DC \u05D4\u05D4\u05DE\u05E8\u05EA \u05D8\u05E7\u05E1\u05D8 \u05DC\u05D3\u05D9\u05D1\u05D5\u05E8 \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D1\u05E2\u05D5\u05DC\u05DD. \u05D8\u05D1\u05E2\u05D9\u05D5\u05EA \u05DE\u05D3\u05D4\u05D9\u05DE\u05D4, \u05E9\u05D9\u05D1\u05D5\u05D8 \u05E7\u05D5\u05DC \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4 \u05DE\u05E2\u05D5\u05DC\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://elevenlabs.io/"
    },
    {
      name: "Suno",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05DE\u05D8\u05E7\u05E1\u05D8! \u05E9\u05D9\u05E8\u05D9\u05DD \u05E2\u05DD \u05DE\u05D9\u05DC\u05D9\u05DD, \u05DC\u05D7\u05E0\u05D9\u05DD \u05D5\u05D1\u05D9\u05E6\u05D5\u05E2\u05D9\u05DD \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://suno.ai/"
    },
    {
      name: "Udio",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05D4\u05DE\u05EA\u05D7\u05E8\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D9 \u05E9\u05DC Suno \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05D5\u05D6\u05D9\u05E7\u05D4. \u05D0\u05D9\u05DB\u05D5\u05EA \u05E1\u05D0\u05D5\u05E0\u05D3 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D5\u05DE\u05D2\u05D5\u05D5\u05DF \u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.udio.com/"
    },
    {
      name: "Murf AI",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E8\u05D9\u05D9\u05E0\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05E2\u05DD \u05DE\u05D2\u05D5\u05D5\u05DF \u05E7\u05D5\u05DC\u05D5\u05EA \u05D5\u05E9\u05E4\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://murf.ai/"
    },
    {
      name: "Play.ht",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05D4\u05DE\u05E8\u05EA \u05D8\u05E7\u05E1\u05D8 \u05DC\u05D3\u05D9\u05D1\u05D5\u05E8 \u05E2\u05DD \u05E7\u05D5\u05DC\u05D5\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://play.ht/"
    },
    {
      name: "Speechify",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05D4\u05E7\u05E8\u05D0\u05EA \u05D8\u05E7\u05E1\u05D8\u05D9\u05DD \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05D1\u05E7\u05D5\u05DC \u05D8\u05D1\u05E2\u05D9. \u05DE\u05D5\u05E9\u05DC\u05DD \u05DC\u05E6\u05E8\u05D9\u05DB\u05EA \u05EA\u05D5\u05DB\u05DF \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05EA\u05E0\u05D5\u05E2\u05D4.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://speechify.com/"
    },
    {
      name: "Descript",
      category: "\u05E7\u05D5\u05DC \u05D5\u05D0\u05D5\u05D3\u05D9\u05D5",
      description: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D0\u05D5\u05D3\u05D9\u05D5 \u05D5\u05D5\u05D9\u05D3\u05D0\u05D5 \u05D3\u05E8\u05DA \u05E2\u05E8\u05D9\u05DB\u05EA \u05D8\u05E7\u05E1\u05D8. \u05DE\u05D5\u05D7\u05E7 \u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D5\u05D6\u05D4 \u05E0\u05DE\u05D7\u05E7 \u05DE\u05D4\u05D4\u05E7\u05DC\u05D8\u05D4.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.descript.com/"
    },
    {
      name: "Gamma",
      category: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E6\u05D2\u05D5\u05EA \u05DE\u05E8\u05D4\u05D9\u05D1\u05D5\u05EA \u05DE\u05D8\u05E7\u05E1\u05D8 \u05D1\u05DC\u05D1\u05D3. \u05E2\u05D9\u05E6\u05D5\u05D1 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D5\u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://gamma.app/"
    },
    {
      name: "Tome",
      category: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E6\u05D2\u05D5\u05EA \u05E0\u05E8\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA \u05E2\u05DD AI. \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05EA \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://tome.app/"
    },
    {
      name: "Beautiful.ai",
      category: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",
      description: "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05E6\u05D2\u05D5\u05EA \u05D7\u05DB\u05DD \u05E9\u05DE\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D9\u05D9\u05D0\u05D0\u05D5\u05D8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05DC\u05EA\u05D5\u05DB\u05DF \u05E9\u05DC\u05DB\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.beautiful.ai/"
    },
    {
      name: "Canva AI",
      category: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",
      description: "\u05DB\u05DC\u05D9 \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1 \u05D4\u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9 \u05E2\u05DD \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA AI \u05DE\u05D5\u05D1\u05E0\u05D5\u05EA \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05E2\u05D5\u05D3.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.canva.com/"
    },
    {
      name: "Notion AI",
      category: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05DE\u05E1\u05DE\u05DB\u05D9\u05DD",
      description: "\u05DB\u05DC\u05D9 \u05D4\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9 \u05E2\u05DD \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA AI \u05DC\u05DB\u05EA\u05D9\u05D1\u05D4, \u05E1\u05D9\u05DB\u05D5\u05DD \u05D5\u05D0\u05D9\u05E8\u05D2\u05D5\u05DF \u05DE\u05D9\u05D3\u05E2.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.notion.so/product/ai"
    },
    {
      name: "Jasper",
      category: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA \u05DB\u05EA\u05D9\u05D1\u05D4 \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05EA AI \u05E2\u05DD \u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2 \u05EA\u05D5\u05DB\u05DF.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://www.jasper.ai/"
    },
    {
      name: "Copy.ai",
      category: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9, \u05DE\u05D9\u05D9\u05DC\u05D9\u05DD \u05D5\u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.copy.ai/"
    },
    {
      name: "Writesonic",
      category: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05DB\u05EA\u05D9\u05D1\u05EA \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD, \u05D1\u05DC\u05D5\u05D2\u05D9\u05DD \u05D5\u05EA\u05D5\u05DB\u05DF \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9 \u05E2\u05DD \u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05DC-SEO.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://writesonic.com/"
    },
    {
      name: "Grammarly",
      category: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D3\u05E7\u05D3\u05D5\u05E7, \u05E1\u05D2\u05E0\u05D5\u05DF \u05D5\u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05D4\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05E2\u05DD \u05D4\u05E6\u05E2\u05D5\u05EA \u05DC\u05E9\u05D9\u05E4\u05D5\u05E8.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.grammarly.com/"
    },
    {
      name: "QuillBot",
      category: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05E0\u05D9\u05E1\u05D5\u05D7 \u05DE\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D8\u05E7\u05E1\u05D8\u05D9\u05DD, \u05E4\u05E8\u05E4\u05E8\u05D6\u05D4 \u05D5\u05E1\u05D9\u05DB\u05D5\u05DD \u05E2\u05DD \u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://quillbot.com/"
    },
    {
      name: "Cursor",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05E2\u05D5\u05E8\u05DA \u05E7\u05D5\u05D3 \u05D7\u05DB\u05DD \u05DE\u05D1\u05D5\u05E1\u05E1 VS Code \u05E2\u05DD AI \u05DE\u05D5\u05D1\u05E0\u05D4. \u05DB\u05EA\u05D9\u05D1\u05D4, \u05EA\u05D9\u05E7\u05D5\u05DF \u05D5\u05D4\u05E1\u05D1\u05E8 \u05E7\u05D5\u05D3.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://cursor.sh/"
    },
    {
      name: "GitHub Copilot",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05E2\u05D5\u05D6\u05E8 \u05E7\u05D5\u05D3 AI \u05DE\u05D1\u05D9\u05EA GitHub. \u05D4\u05E9\u05DC\u05DE\u05D5\u05EA \u05D7\u05DB\u05DE\u05D5\u05EA \u05D5\u05D4\u05E6\u05E2\u05D5\u05EA \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://github.com/features/copilot"
    },
    {
      name: "Replit",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05E1\u05D1\u05D9\u05D1\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D1\u05E2\u05E0\u05DF \u05E2\u05DD AI \u05DE\u05D5\u05D1\u05E0\u05D4. \u05DE\u05D5\u05E9\u05DC\u05DD \u05DC\u05DC\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://replit.com/"
    },
    {
      name: "V0.dev",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05DE\u05E9\u05E7\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05D8\u05E7\u05E1\u05D8. \u05DE\u05EA\u05D0\u05E8 \u05DE\u05D4 \u05E8\u05D5\u05E6\u05D9\u05DD \u05D5\u05DE\u05E7\u05D1\u05DC\u05D9\u05DD \u05E7\u05D5\u05D3 React \u05DE\u05D5\u05DB\u05DF.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://v0.dev/"
    },
    {
      name: "Bolt.new",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D5\u05D0\u05EA\u05E8\u05D9\u05DD \u05DE\u05DC\u05D0\u05D9\u05DD \u05D3\u05E8\u05DA \u05E9\u05D9\u05D7\u05D4. \u05DE\u05EA\u05D0\u05D9\u05DD \u05D2\u05DD \u05DC\u05DE\u05D9 \u05E9\u05DC\u05D0 \u05D9\u05D5\u05D3\u05E2 \u05E7\u05D5\u05D3.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://bolt.new/"
    },
    {
      name: "Lovable",
      category: "\u05E7\u05D5\u05D3 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D5\u05D5\u05D1 \u05DE\u05DC\u05D0\u05D5\u05EA \u05D3\u05E8\u05DA \u05E9\u05D9\u05D7\u05D4 \u05D1\u05E9\u05E4\u05D4 \u05D8\u05D1\u05E2\u05D9\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://lovable.dev/"
    },
    {
      name: "n8n",
      category: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05E2\u05DD \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05D5\u05D9\u05DB\u05D5\u05DC\u05D5\u05EA AI.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://n8n.io/"
    },
    {
      name: "Make",
      category: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05D9\u05DD \u05D1\u05D9\u05DF \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.make.com/"
    },
    {
      name: "Zapier",
      category: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4",
      description: "\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D5\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05E9\u05DC \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D7\u05D5\u05D6\u05E8\u05D5\u05EA \u05DC\u05DC\u05D0 \u05E7\u05D5\u05D3.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://zapier.com/"
    },
    {
      name: "Relevance AI",
      category: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D5\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://relevanceai.com/"
    },
    {
      name: "Voiceflow",
      category: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD \u05D5\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05EA \u05DC\u05DC\u05D0 \u05E7\u05D5\u05D3.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.voiceflow.com/"
    },
    {
      name: "Botpress",
      category: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://botpress.com/"
    },
    {
      name: "Vapi",
      category: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05E7\u05D5\u05DC\u05D9\u05D9\u05DD \u05DC\u05E9\u05D9\u05D7\u05D5\u05EA \u05D8\u05DC\u05E4\u05D5\u05DF \u05D0\u05DE\u05D9\u05EA\u05D9\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://vapi.ai/"
    },
    {
      name: "Bland AI",
      category: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI",
      description: "\u05E1\u05D5\u05DB\u05E0\u05D9 \u05D8\u05DC\u05E4\u05D5\u05DF AI \u05E9\u05D9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DC\u05D1\u05E6\u05E2 \u05D5\u05DC\u05E7\u05D1\u05DC \u05E9\u05D9\u05D7\u05D5\u05EA \u05D1\u05E9\u05DE\u05DB\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.bland.ai/"
    },
    {
      name: "Photoroom",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05D4\u05E1\u05E8\u05EA \u05E8\u05E7\u05E2 \u05D5\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8 \u05D1\u05E8\u05DE\u05D4 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.photoroom.com/"
    },
    {
      name: "Remove.bg",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05D4\u05E1\u05E8\u05EA \u05E8\u05E7\u05E2 \u05DE\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05D7\u05EA. \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05D3\u05D5\u05D9\u05E7.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.remove.bg/"
    },
    {
      name: "Cleanup.pictures",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05DE\u05D7\u05D9\u05E7\u05EA \u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD \u05DC\u05D0 \u05E8\u05E6\u05D5\u05D9\u05D9\u05DD \u05DE\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D1\u05E7\u05DC\u05D5\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://cleanup.pictures/"
    },
    {
      name: "Magnific AI",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05D4\u05D2\u05D3\u05DC\u05EA \u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E9\u05DE\u05D9\u05E8\u05D4 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD",
      link: "https://magnific.ai/"
    },
    {
      name: "Clipdrop",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      description: "\u05D7\u05D1\u05D9\u05DC\u05EA \u05DB\u05DC\u05D9 \u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D1\u05D9\u05EA Stability AI.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://clipdrop.co/"
    },
    {
      name: "Otter.ai",
      category: "\u05EA\u05DE\u05DC\u05D5\u05DC",
      description: "\u05EA\u05DE\u05DC\u05D5\u05DC \u05E9\u05D9\u05D7\u05D5\u05EA \u05D5\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05E2\u05DD \u05D6\u05D9\u05D4\u05D5\u05D9 \u05D3\u05D5\u05D1\u05E8\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://otter.ai/"
    },
    {
      name: "Whisper",
      category: "\u05EA\u05DE\u05DC\u05D5\u05DC",
      description: "\u05DE\u05D5\u05D3\u05DC \u05EA\u05DE\u05DC\u05D5\u05DC \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7 \u05E9\u05DC OpenAI. \u05D3\u05D9\u05D5\u05E7 \u05D2\u05D1\u05D5\u05D4 \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E9\u05E4\u05D5\u05EA \u05DB\u05D5\u05DC\u05DC \u05E2\u05D1\u05E8\u05D9\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://openai.com/research/whisper"
    },
    {
      name: "Fireflies.ai",
      category: "\u05EA\u05DE\u05DC\u05D5\u05DC",
      description: "\u05EA\u05DE\u05DC\u05D5\u05DC \u05D5\u05E1\u05D9\u05DB\u05D5\u05DD \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05E2\u05DD \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05DC-Zoom \u05D5-Meet.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://fireflies.ai/"
    },
    {
      name: "Tactiq",
      category: "\u05EA\u05DE\u05DC\u05D5\u05DC",
      description: "\u05EA\u05DE\u05DC\u05D5\u05DC \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA Zoom, Meet \u05D5-Teams \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05E2\u05DD \u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 AI.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://tactiq.io/"
    },
    {
      name: "Opus Clip",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D7\u05D9\u05EA\u05D5\u05DA \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05E9\u05DC \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05E8\u05D5\u05DB\u05D9\u05DD \u05DC\u05E7\u05DC\u05D9\u05E4\u05D9\u05DD \u05E7\u05E6\u05E8\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.opus.pro/"
    },
    {
      name: "Captions",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05EA\u05D5\u05D1\u05D9\u05D5\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D5\u05EA \u05D5\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05D7\u05DB\u05DE\u05D4.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.captions.ai/"
    },
    {
      name: "Kapwing",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5 \u05D0\u05D5\u05E0\u05DC\u05D9\u05D9\u05DF \u05E2\u05DD \u05DB\u05DC\u05D9 AI \u05DC\u05DB\u05EA\u05D5\u05D1\u05D9\u05D5\u05EA, \u05D7\u05D9\u05EA\u05D5\u05DA \u05D5\u05E2\u05D5\u05D3.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.kapwing.com/"
    },
    {
      name: "Pictory",
      category: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05D4\u05E4\u05D9\u05DB\u05EA \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D5\u05D8\u05E7\u05E1\u05D8\u05D9\u05DD \u05DC\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://pictory.ai/"
    },
    {
      name: "ChatPDF",
      category: "\u05DE\u05D7\u05E7\u05E8 \u05D5\u05E0\u05D9\u05EA\u05D5\u05D7",
      description: "\u05E9\u05D9\u05D7\u05D4 \u05E2\u05DD \u05DE\u05E1\u05DE\u05DB\u05D9 PDF. \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E2\u05DC \u05D4\u05EA\u05D5\u05DB\u05DF.",
      hebrew_support: "\u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://www.chatpdf.com/"
    },
    {
      name: "Consensus",
      category: "\u05DE\u05D7\u05E7\u05E8 \u05D5\u05E0\u05D9\u05EA\u05D5\u05D7",
      description: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05DE\u05D7\u05E7\u05E8\u05D9\u05DD \u05D0\u05E7\u05D3\u05DE\u05D9\u05D9\u05DD \u05E2\u05DD \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA \u05DE\u05D3\u05E2.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://consensus.app/"
    },
    {
      name: "Elicit",
      category: "\u05DE\u05D7\u05E7\u05E8 \u05D5\u05E0\u05D9\u05EA\u05D5\u05D7",
      description: "\u05E2\u05D5\u05D6\u05E8 \u05DE\u05D7\u05E7\u05E8 AI \u05E9\u05DE\u05D5\u05E6\u05D0 \u05D5\u05DE\u05E0\u05EA\u05D7 \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D0\u05E7\u05D3\u05DE\u05D9\u05D9\u05DD.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05D7\u05D9\u05E0\u05DD",
      link: "https://elicit.com/"
    },
    {
      name: "Semantic Scholar",
      category: "\u05DE\u05D7\u05E7\u05E8 \u05D5\u05E0\u05D9\u05EA\u05D5\u05D7",
      description: "\u05DE\u05E0\u05D5\u05E2 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05E7\u05D3\u05DE\u05D9 \u05D7\u05DB\u05DD \u05E2\u05DD \u05E1\u05D9\u05DB\u05D5\u05DE\u05D9 AI.",
      hebrew_support: "\u05DC\u05D0 \u05EA\u05D5\u05DE\u05DA",
      cost: "\u05D7\u05D9\u05E0\u05DD!",
      link: "https://www.semanticscholar.org/"
    }
  ];
  const categories = [...new Set(toolsData.map((tool) => tool.category))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-mlc4vpxg": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden" data-astro-cid-mlc4vpxg> <!-- Video Background --> <div class="absolute inset-0 z-0" data-astro-cid-mlc4vpxg> <video class="absolute w-full h-full object-cover" autoplay muted loop playsinline data-astro-cid-mlc4vpxg> <source src="https://res.cloudinary.com/dfudxxzlj/video/upload/v1764503745/%D7%99%D7%A6%D7%99%D7%A8%D7%AA_%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%9E%D7%95%D7%AA%D7%92_AI_%D7%94%D7%99%D7%99%D7%98%D7%A7%D7%99_y6o1hx.mp4" type="video/mp4" data-astro-cid-mlc4vpxg> </video> <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" data-astro-cid-mlc4vpxg></div> </div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.03] z-10" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-mlc4vpxg></div> <div class="container mx-auto px-4 relative z-20 text-center" data-astro-cid-mlc4vpxg> <!-- Logo --> <div class="mb-8" data-astro-cid-mlc4vpxg> <img src="https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png" alt="FOCUS AI Logo" class="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain" style="filter: drop-shadow(0 4px 30px rgba(168, 85, 247, 0.4));" data-astro-cid-mlc4vpxg> </div> <!-- Title --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6" data-astro-cid-mlc4vpxg>
מרכז <span class="text-[#a855f7]" style="text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);" data-astro-cid-mlc4vpxg>כלי הבינה המלאכותית</span> </h1> <!-- Subtitle --> <p class="text-lg md:text-xl text-[#d0d0e0] max-w-2xl mx-auto mb-12" data-astro-cid-mlc4vpxg>
הדשבורד המקיף לכלי ה-AI המובילים בעולם. סננו לפי קטגוריה, חפשו את הכלי המושלם וקפצו ישירות לעבודה.
</p> <!-- Stats --> <div class="flex justify-center gap-12 flex-wrap" data-astro-cid-mlc4vpxg> <div class="text-center" data-astro-cid-mlc4vpxg> <div class="text-4xl font-black text-[#a855f7]" id="totalTools" data-astro-cid-mlc4vpxg>${toolsData.length}</div> <div class="text-sm text-[#b0b0c0] font-mono uppercase tracking-wider" data-astro-cid-mlc4vpxg>כלי AI</div> </div> <div class="text-center" data-astro-cid-mlc4vpxg> <div class="text-4xl font-black text-[#a855f7]" id="totalCategories" data-astro-cid-mlc4vpxg>${categories.length}</div> <div class="text-sm text-[#b0b0c0] font-mono uppercase tracking-wider" data-astro-cid-mlc4vpxg>קטגוריות</div> </div> <div class="text-center" data-astro-cid-mlc4vpxg> <div class="text-4xl font-black text-[#a855f7]" id="freeTools" data-astro-cid-mlc4vpxg>${toolsData.filter((t) => t.cost.includes("\u05D7\u05D9\u05E0\u05DD")).length}</div> <div class="text-sm text-[#b0b0c0] font-mono uppercase tracking-wider" data-astro-cid-mlc4vpxg>כלים חינמיים</div> </div> </div> </div> </section>  <section class="py-6 border-y border-[#2a2a3a] bg-[#0d0d12]" data-astro-cid-mlc4vpxg> <div class="container mx-auto px-4" data-astro-cid-mlc4vpxg> <div class="flex justify-center items-center gap-6 flex-wrap text-sm" data-astro-cid-mlc4vpxg> <a href="https://focusai.co.il/webinar/" target="_blank" class="flex items-center gap-2 text-[#d0d0e0] hover:text-[#a855f7] transition-colors" data-astro-cid-mlc4vpxg> <span class="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" data-astro-cid-mlc4vpxg></span>
וובינר חינמי בקרוב
</a> <span class="text-[#2a2a3a]" data-astro-cid-mlc4vpxg>|</span> <a href="https://focusai.co.il/academy/" target="_blank" class="text-[#d0d0e0] hover:text-[#a855f7] transition-colors" data-astro-cid-mlc4vpxg>
הכשרה מקצועית
</a> <span class="text-[#2a2a3a]" data-astro-cid-mlc4vpxg>|</span> <a href="https://did.li/Focus-community" target="_blank" class="text-[#d0d0e0] hover:text-[#25D366] transition-colors" data-astro-cid-mlc4vpxg>
קהילת וואטסאפ
</a> <span class="text-[#2a2a3a]" data-astro-cid-mlc4vpxg>|</span> <a href="https://wa.me/972539466408" target="_blank" class="text-[#d0d0e0] hover:text-[#25D366] transition-colors" data-astro-cid-mlc4vpxg>
שאלות? דברו איתנו
</a> </div> </div> </section>  <section class="py-8" data-astro-cid-mlc4vpxg> <div class="container mx-auto px-4" data-astro-cid-mlc4vpxg> <div class="max-w-4xl mx-auto p-6 md:p-8 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px));" data-astro-cid-mlc4vpxg> <!-- Search --> <div class="relative mb-6" data-astro-cid-mlc4vpxg> <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[#b0b0c0]" data-astro-cid-mlc4vpxg> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-mlc4vpxg></path> </svg> </span> <input type="text" id="searchInput" class="w-full px-4 py-4 pr-12 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono" placeholder="חפשו כלי לפי שם או תיאור..." data-astro-cid-mlc4vpxg> </div> <!-- Filter Pills --> <div class="flex items-center gap-4 flex-wrap" data-astro-cid-mlc4vpxg> <span class="text-[#b0b0c0] text-sm font-mono" data-astro-cid-mlc4vpxg>סננו לפי:</span> <div class="flex gap-2 flex-wrap" id="filterPills" data-astro-cid-mlc4vpxg> <button class="filter-pill active px-4 py-2 text-sm font-medium border border-[#a855f7] bg-[#a855f7]/10 text-[#a855f7] hover:bg-[#a855f7]/20 transition-all" data-category="all" data-astro-cid-mlc4vpxg>
הכל
</button> ${categories.map((category) => renderTemplate`<button class="filter-pill px-4 py-2 text-sm font-medium border border-[#2a2a3a] text-[#d0d0e0] hover:border-[#a855f7]/50 hover:text-white transition-all"${addAttribute(category, "data-category")} data-astro-cid-mlc4vpxg> ${category} </button>`)} </div> </div> </div> </div> </section>  <div class="container mx-auto px-4 mb-6" data-astro-cid-mlc4vpxg> <p class="text-[#d0d0e0] text-sm font-mono" id="resultsCount" data-astro-cid-mlc4vpxg>
מציג <span class="text-white font-bold" data-astro-cid-mlc4vpxg>${toolsData.length}</span> כלים
</p> </div>  <section class="pb-16" data-astro-cid-mlc4vpxg> <div class="container mx-auto px-4" data-astro-cid-mlc4vpxg> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="toolsGrid" data-astro-cid-mlc4vpxg> ${toolsData.map((tool) => renderTemplate`<article class="tool-card group p-6 border border-[#2a2a3a] bg-[#12121a] hover:border-[#a855f7]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"${addAttribute(tool.category, "data-category")}${addAttribute(tool.name.toLowerCase(), "data-name")}${addAttribute(tool.description.toLowerCase(), "data-description")} data-astro-cid-mlc4vpxg> <!-- Header --> <div class="flex justify-between items-start mb-4" data-astro-cid-mlc4vpxg> <h3 class="text-xl font-bold text-white" data-astro-cid-mlc4vpxg>${tool.name}</h3> <span${addAttribute(`px-3 py-1 text-xs font-medium rounded-full ${tool.hebrew_support === "\u05EA\u05D5\u05DE\u05DA" ? "bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30" : "bg-red-500/10 text-red-400 border border-red-500/30"}`, "class")} data-astro-cid-mlc4vpxg> ${tool.hebrew_support === "\u05EA\u05D5\u05DE\u05DA" ? "\u05EA\u05D5\u05DE\u05DA \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA" : "\u05DC\u05DC\u05D0 \u05E2\u05D1\u05E8\u05D9\u05EA"} </span> </div> <!-- Category --> <span class="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-[#a855f7]/5 border border-[#a855f7]/20 text-[#d0d0e0] w-fit mb-4" data-astro-cid-mlc4vpxg> ${tool.category} </span> <!-- Description --> <p class="text-[#d0d0e0] text-sm leading-relaxed mb-6 flex-grow" data-astro-cid-mlc4vpxg> ${tool.description} </p> <!-- Footer --> <div class="flex justify-between items-center pt-4 border-t border-[#2a2a3a]" data-astro-cid-mlc4vpxg> <span${addAttribute(`inline-flex items-center gap-1.5 text-sm font-medium ${tool.cost.includes("\u05D7\u05D9\u05E0\u05DD") ? "text-[#a855f7]" : tool.cost.includes("\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF") ? "text-cyan-400" : "text-pink-400"}`, "class")} data-astro-cid-mlc4vpxg> ${tool.cost.includes("\u05D7\u05D9\u05E0\u05DD") && renderTemplate`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-astro-cid-mlc4vpxg></path></svg>`} ${tool.cost.includes("\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF") && renderTemplate`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-mlc4vpxg></path></svg>`} ${tool.cost === "\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD" && renderTemplate`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" data-astro-cid-mlc4vpxg></path></svg>`} ${tool.cost} </span> <a${addAttribute(tool.link, "href")} target="_blank" rel="noopener noreferrer" class="px-5 py-2 text-sm font-medium bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] hover:bg-[#a855f7] hover:text-[#0a0a0f] transition-all duration-300" style="clip-path: polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px));" data-astro-cid-mlc4vpxg>
לכלי
</a> </div> </article>`)} </div> <!-- No Results --> <div id="noResults" class="hidden text-center py-20" data-astro-cid-mlc4vpxg> <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#2a2a3a] bg-[#12121a]" data-astro-cid-mlc4vpxg> <svg class="w-12 h-12 text-[#b0b0c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-mlc4vpxg></path> </svg> </div> <p class="text-xl text-white mb-2" data-astro-cid-mlc4vpxg>לא נמצאו כלים</p> <p class="text-[#b0b0c0]" data-astro-cid-mlc4vpxg>נסו לחפש מילה אחרת או לשנות את הסינון</p> </div> </div> </section>  <section class="py-16 mx-4" data-astro-cid-mlc4vpxg> <div class="container mx-auto max-w-4xl p-8 md:p-12 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));" data-astro-cid-mlc4vpxg> <div class="text-center" data-astro-cid-mlc4vpxg> <span class="inline-block px-4 py-2 border border-[#a855f7] text-[#a855f7] text-sm font-mono mb-6" data-astro-cid-mlc4vpxg>הכשרה מקצועית</span> <h2 class="text-3xl md:text-4xl font-black mb-6" data-astro-cid-mlc4vpxg>רוצים להפוך את הבינה המלאכותית לקריירה?</h2> <p class="text-[#d0d0e0] text-lg mb-8 max-w-2xl mx-auto" data-astro-cid-mlc4vpxg>
הצטרפו להכשרה המקצועית שלנו למפתחי סוכני AI ואוטומציות עסקיות.
          קחו את הידע שלכם לשלב הבא עם תעודה מקצועית בליווי אקדמי של היחידה ללימודי חוץ באוניברסיטת חיפה.
</p> <div class="flex flex-wrap justify-center gap-3 mb-8" data-astro-cid-mlc4vpxg> <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/5 border border-[#a855f7]/20 text-white text-sm" data-astro-cid-mlc4vpxg> <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-mlc4vpxg></path></svg>
ללא ידע מוקדם בתכנות
</span> <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/5 border border-[#a855f7]/20 text-white text-sm" data-astro-cid-mlc4vpxg> <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-mlc4vpxg></path></svg>
תיק עבודות
</span> <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/5 border border-[#a855f7]/20 text-white text-sm" data-astro-cid-mlc4vpxg> <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-mlc4vpxg></path></svg>
פרונטלי / זום
</span> <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/5 border border-[#a855f7]/20 text-white text-sm" data-astro-cid-mlc4vpxg> <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-mlc4vpxg></path></svg>
תעודה מקצועית
</span> <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/5 border border-[#a855f7]/20 text-white text-sm" data-astro-cid-mlc4vpxg> <svg class="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-mlc4vpxg><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-mlc4vpxg></path></svg>
קהילת בוגרים
</span> </div> <a href="https://focusai.co.il/academy/" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-mlc4vpxg>
למידע נוסף על ההכשרה
</a> </div> </div> </section>  <section class="py-8 mx-4" data-astro-cid-mlc4vpxg> <div class="container mx-auto max-w-4xl p-8 md:p-12 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));" data-astro-cid-mlc4vpxg> <div class="text-center" data-astro-cid-mlc4vpxg> <span class="inline-block px-4 py-2 border border-pink-500 text-pink-400 text-sm font-mono mb-6" data-astro-cid-mlc4vpxg>בקרוב | וובינר חינמי</span> <h2 class="text-2xl md:text-3xl font-black mb-4" data-astro-cid-mlc4vpxg>וובינר סוכני AI - הדור הבא של העסקים בישראל</h2> <p class="text-[#d0d0e0] mb-8 max-w-xl mx-auto" data-astro-cid-mlc4vpxg>
גלו איך סוכני AI משנים את כללי המשחק בעולם העסקי או האישי.
          וובינר מעשי שיראה לכם בדיוק איך לבנות סוכן AI ראשון משלכם.
</p> <a href="https://focusai.co.il/webinar/" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-mlc4vpxg>
שמרו לי מקום בוובינר
</a> </div> </div> </section>  <section class="py-8 mx-4" data-astro-cid-mlc4vpxg> <div class="container mx-auto max-w-4xl p-8 md:p-12 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));" data-astro-cid-mlc4vpxg> <div class="text-center" data-astro-cid-mlc4vpxg> <h3 class="text-2xl font-bold mb-4" data-astro-cid-mlc4vpxg>יש שאלות? אנחנו כאן בשבילכם</h3> <p class="text-[#d0d0e0] mb-8" data-astro-cid-mlc4vpxg>
צוות FOCUS AI זמין לכל שאלה, התייעצות או סתם לשיחה על הכלי הבא שישנה לכם את העבודה
</p> <div class="flex justify-center gap-4 flex-wrap" data-astro-cid-mlc4vpxg> <a href="https://did.li/Focus-community" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-full hover:brightness-110 transition-all" data-astro-cid-mlc4vpxg> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mlc4vpxg> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-mlc4vpxg></path> </svg>
הצטרפו לקהילה לטיפים ועדכונים
</a> <a href="https://wa.me/972539466408" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#a855f7] text-[#a855f7] font-medium rounded-full hover:bg-[#a855f7] hover:text-[#0a0a0f] transition-all" data-astro-cid-mlc4vpxg>
דברו איתנו
</a> </div> </div> </div> </section>  <section class="py-8 mx-4 mb-8" data-astro-cid-mlc4vpxg> <div class="container mx-auto max-w-4xl p-8 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px));" data-astro-cid-mlc4vpxg> <h3 class="text-xl font-bold text-center mb-6" data-astro-cid-mlc4vpxg>עקבו אחרינו ב:</h3> <div class="flex justify-center gap-4 flex-wrap" data-astro-cid-mlc4vpxg> <a href="https://www.instagram.com/focus.creative.ai" target="_blank" class="flex items-center gap-2 px-6 py-3 border border-[#2a2a3a] text-white hover:border-[#E4405F] hover:text-[#E4405F] transition-all rounded-full" data-astro-cid-mlc4vpxg> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mlc4vpxg> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-mlc4vpxg></path> </svg>
אינסטגרם
</a> <a href="https://www.facebook.com/people/Focus-AI-%D7%9E%D7%97%D7%91%D7%A8%D7%99%D7%9D-%D7%90%D7%A0%D7%A9%D7%99%D7%9D-%D7%95%D7%98%D7%9B%D7%95%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94/61577639435714/" target="_blank" class="flex items-center gap-2 px-6 py-3 border border-[#2a2a3a] text-white hover:border-[#1877F2] hover:text-[#1877F2] transition-all rounded-full" data-astro-cid-mlc4vpxg> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mlc4vpxg> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-mlc4vpxg></path> </svg>
פייסבוק
</a> <a href="https://www.tiktok.com/@focus.creative.ai" target="_blank" class="flex items-center gap-2 px-6 py-3 border border-[#2a2a3a] text-white hover:border-[#00F2EA] hover:text-[#00F2EA] transition-all rounded-full" data-astro-cid-mlc4vpxg> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-mlc4vpxg> <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" data-astro-cid-mlc4vpxg></path> </svg>
טיק טוק
</a> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-mlc4vpxg": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "currentPath": "/tools", "data-astro-cid-mlc4vpxg": true })}` })} ${renderScript($$result, "C:/sites/maderfuker/focusai-website/src/pages/tools.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/sites/maderfuker/focusai-website/src/pages/tools.astro", void 0);

const $$file = "C:/sites/maderfuker/focusai-website/src/pages/tools.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tools,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
