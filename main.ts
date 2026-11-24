// Dad Joke Showdown — one dad joke, written to be told out loud.
//
// Writes one fixed joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// No network, no randomness, no input. Deterministic: every run writes
// byte-identical output.
//
// The joke: "My son asked why I never get lost. I said, 'I just follow
// my gut - it always leads me straight to the fridge.'"
// (110 characters, 110 bytes, inside the 1-200 gate.)
//
// Why this joke: "follow my gut" turns instantly on first read — gut as
// instinct becomes gut as stomach, and the stomach leads straight to the
// fridge. A father answering his son at the table, self-deprecating belly
// joke, punchline ("fridge") at the very end, two short sentences a father
// could deliver across a dinner table. Fresh framing, traditional dad
// joke — no scarecrow, no belt, no chicken crossing. The gate check
// below fails loudly instead of silently shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My son asked why I never get lost. I said, 'I just follow my gut - it always leads me straight to the fridge.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error("entry.txt must be 1-200 non-blank characters");
}
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf-8");
