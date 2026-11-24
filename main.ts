// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes exactly one line of horror (a single sentence under 200 characters)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: no input, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I checked the baby monitor's history and found footage of me tucking my daughter in on nights I was three hundred miles away.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length > 200) throw new Error("line exceeds 200 characters");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
