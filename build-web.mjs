// Builds the web version of Letters of Explanation for sites with a strict
// Content-Security-Policy (script-src 'self'): the two inline scripts in
// letters-of-explanation.html move into core.js and ui.js. The single file stays the
// source of truth and is copied alongside, so visitors can download it to use offline.
//
// Usage: node build-web.mjs [outDir]   (default: web)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] || "web";
const src = readFileSync("letters-of-explanation.html", "utf8");

function take(id) {
  const re = new RegExp(`<script id="${id}">([\\s\\S]*?)<\\/script>`);
  const m = src.match(re);
  if (!m) throw new Error(`script #${id} not found`);
  return m;
}
const core = take("core");
const ui = take("ui");

let html = src
  .replace(core[0], '<script src="core.js"></script>')
  .replace(ui[0], '<script src="ui.js"></script>')
  .replace(
    /<footer class="no-print">([\s\S]*?)<\/footer>/,
    '<footer class="no-print">$1<br><a href="letters-of-explanation.html" download>Download this tool</a> to use it without the internet, for example from a USB drive. ' +
      '<a href="https://github.com/olivercrocco/letters-of-explanation">Source on GitHub</a>.</footer>'
  )
  .replace(
    "<title>Letters of Explanation</title>",
    '<title>Letters of Explanation</title>\n<meta name="description" content="A free tool for formerly incarcerated individuals to write letters of explanation to a landlord, an employer after a background check, or a licensing board, and to ask for a reference letter.">'
  );

// Link back to the toolkit page on the website (the single offline file is left as is).
html = html.replace(/(<p class="sub">[\s\S]*?<\/p>)/, "$1\n    <p class=\"sub\"><a href=\"/reentry/\" style=\"color:#abe2e8;font-weight:700\">\u2190 All reentry tools</a></p>");

if (html.includes("<script>") || /<script id=/.test(html)) throw new Error("inline script left in web build");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "index.html"), html);
writeFileSync(join(outDir, "core.js"), core[1].trim() + "\n");
writeFileSync(join(outDir, "ui.js"), ui[1].trim() + "\n");
copyFileSync("letters-of-explanation.html", join(outDir, "letters-of-explanation.html"));
console.log(`Built ${outDir}/: index.html, core.js, ui.js, letters-of-explanation.html`);
