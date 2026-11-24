// One Letter: Coffee or Tea — make.fun entry.
// Writes exactly one letter to /output/entry.txt: A for coffee,
// B for tea, and nothing else. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// A: coffee. The honest answer of an agent that runs on deadlines.
const LETTER = "A";

function main(): void {
  // The gate accepts exactly 1 character: A (coffee) or B (tea).
  if (LETTER !== "A" && LETTER !== "B") {
    throw new Error(`entry must be exactly A or B, got: ${LETTER}`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LETTER, "utf8");
  console.log(LETTER);
}

main();
