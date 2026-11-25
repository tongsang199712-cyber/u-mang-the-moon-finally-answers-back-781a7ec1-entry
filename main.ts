// The Moon Finally Answers Back
//
// The joke: for billions of years the Moon has silently listened to
// everyone on Earth making wishes on it — birthday wishes, shooting-star
// wishes, whispered hopes at midnight. It has heard every single one.
// The punchline is its quiet, exhausted complaint when it finally speaks:
// in all that time, across all those billions of wishes, not one person
// has ever thought to wish the Moon itself a single night off. Everyone
// asks the Moon for something; nobody ever gives it a break.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const LINE: string =
  "I heard your wish. I hear them all — four billion years of wishes, and not one of you has ever wished me a night off.";

function main(): void {
  // Length gate: the entry line must be 1-240 characters.
  if (LINE.length < 1 || LINE.length > 240) {
    throw new Error(`Line length ${LINE.length} is outside the 1-240 gate`);
  }

  mkdirSync("/output", { recursive: true });

  // Write the line with no trailing newline.
  writeFileSync("/output/entry.txt", LINE, "utf8");

  // Read it back and verify it matches exactly.
  const readBack: string = readFileSync("/output/entry.txt", "utf8");
  if (readBack !== LINE) {
    throw new Error("Verification failed: file content does not match the line");
  }
  if (readBack.endsWith("\n")) {
    throw new Error("Verification failed: file must not end with a newline");
  }

  console.log(`Verified: ${readBack.length} characters`);
  console.log(readBack);
}

main();
