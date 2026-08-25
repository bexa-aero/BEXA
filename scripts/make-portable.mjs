// Flattens a Vite build (with assetsInlineLimit maxed) into a single
// self-contained HTML file that can be shared and opened from file://.
// Usage: node scripts/make-portable.mjs <distDir> <outFile>
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [distDir = "dist-portable", outFile = "BExA-site-preview.html"] =
  process.argv.slice(2);

let html = readFileSync(join(distDir, "index.html"), "utf8");

// Inline the stylesheet(s)
html = html.replace(
  /<link rel="stylesheet"[^>]*href="\/?(assets\/[^"]+\.css)"[^>]*>/g,
  (_, file) => `<style>${readFileSync(join(distDir, file), "utf8")}</style>`
);

// Inline the module script(s); escape </script so the bundle can't
// terminate the inline tag early
html = html.replace(
  /<script type="module"[^>]*src="\/?(assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_, file) => {
    const js = readFileSync(join(distDir, file), "utf8").replace(
      /<\/script/g,
      "<\\/script"
    );
    return `<script type="module">${js}</script>`;
  }
);

if (/(src|href)="\/?assets\//.test(html)) {
  console.error("WARNING: some asset references were not inlined");
  process.exitCode = 1;
}

writeFileSync(outFile, html);
console.log(
  `Wrote ${outFile} (${(html.length / 1024).toFixed(0)} KB)`
);
