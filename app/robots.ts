import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * Crawlers used by AI search and assistants. The wildcard rule below already
 * allows them, but naming them makes the policy explicit and survives any
 * future "block unknown bots" rule added above it.
 *
 * POLICY DECISION (client, Oct 2026): maximum visibility everywhere. Both
 * AI *search* crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot…)
 * and AI *training* crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended,
 * Applebot-Extended, meta-externalagent…) are deliberately allowed. Do not
 * split them into allow/disallow groups without the client's say-so.
 *
 * Do NOT disallow /thank-you here: it is noindex, and Google can only honour
 * a noindex tag on a page it is allowed to fetch.
 */
const aiCrawlers = [
  // OpenAI — ChatGPT search, browsing and training
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  // Anthropic — Claude
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  // Google — Gemini / AI Overviews grounding
  "Google-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Microsoft Copilot (uses Bingbot) and Apple Intelligence
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  // Meta AI, Amazon Alexa, DuckDuckGo AI, Mistral, You.com, Common Crawl
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
