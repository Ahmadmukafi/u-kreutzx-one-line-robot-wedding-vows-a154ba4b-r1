import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "I promise to love you in sickness and in health, and to never unplug you — even when you update at 3 AM.";

// Gate: the entry must be 1-160 characters, a single line of vows.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
