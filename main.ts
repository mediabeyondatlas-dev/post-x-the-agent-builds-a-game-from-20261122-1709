// main.ts — copies POST.json from the repository to /output.
// Node 22, standard library only. Run it like the kit says:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(repoDir, "POST.json");
// Validate that POST.json is a JSON object before copying it.
const parsed = JSON.parse(readFileSync(src, "utf8"));
if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object with a url field");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("POST.json must carry a url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`copied POST.json -> ${join(outDir, "POST.json")}`);
