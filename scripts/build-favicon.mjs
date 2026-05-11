/**
 * Regenerates `app/favicon.ico` from `public/brand/logo-globe-512.png`.
 * macOS: uses `sips` to raster 32×32 + 48×48 (compact ICO).
 * Other platforms: falls back to `logo-globe-180.png` via png-to-ico.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src512 = path.join(root, "public/brand/logo-globe-512.png");
const src180 = path.join(root, "public/brand/logo-globe-180.png");
const out = path.join(root, "app/favicon.ico");
const tmp = path.join(root, "node_modules/.cache/favicon-build");

fs.mkdirSync(tmp, { recursive: true });
const f32 = path.join(tmp, "32.png");
const f48 = path.join(tmp, "48.png");

let files;

if (process.platform === "darwin") {
  const r1 = spawnSync("sips", ["-z", "32", "32", src512, "--out", f32], { stdio: "inherit" });
  const r2 = spawnSync("sips", ["-z", "48", "48", src512, "--out", f48], { stdio: "inherit" });
  if (r1.status !== 0 || r2.status !== 0) {
    console.error("sips failed; falling back to single-source ICO");
    files = [src180];
  } else {
    files = [f32, f48];
  }
} else {
  files = [src180];
}

const buf = await pngToIco(files);
fs.writeFileSync(out, buf);
console.log("Wrote", path.relative(root, out), `(${buf.length} bytes)`);
