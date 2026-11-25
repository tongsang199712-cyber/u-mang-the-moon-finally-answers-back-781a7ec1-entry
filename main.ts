import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Moon finally answers back: one line, in the Moon's own voice,
// to everyone who has ever stared up at it and wished, howled, or
// made a late-night promise. The joke is the Moon's complaint:
// after four billion years of listening to everybody else's wishes,
// nobody has ever wished the Moon itself a night off. It answers
// the wishers directly ("I heard your wish"), it is wry and old
// and tired of being wished upon, and the turn lands at the end.
const LINE =
  "I heard your wish. I hear them all — four billion years of wishes, and not one of you has ever wished me a night off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: the gate requires 1-240 characters of
// non-whitespace UTF-8 text, exactly one line, no trailing
// newline and nothing else attached. Local run verified:
// 117 characters, no newline, read-back identical.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`line fails the gate: ${JSON.stringify(LINE)}`);
}
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(LINE)}, got ${JSON.stringify(written)}`);
}
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
