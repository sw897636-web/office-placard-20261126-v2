// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for a stapler, treated as an ancient
// artifact, to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Node 22, no dependencies, no network, fully deterministic.
// The gate requires 1-180 characters; the placard below is 175.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD =
  "Stapler, c. 1989, pressed steel. Believed to seal oaths between departments; " +
  "excavated still loaded, its final staple reserved for a merger that never " +
  "happened. Gift of Legal.";

if (PLACARD.length < 1 || PLACARD.length > 180) {
  throw new Error(`placard is ${PLACARD.length} characters, must be 1-180`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PLACARD + "\n", "utf8");
