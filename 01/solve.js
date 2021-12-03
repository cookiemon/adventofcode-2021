const fs = require("fs");
let input = fs.readFileSync("input", "utf8");

input = input
  .trimEnd()
  .split("\n")
  .map((i) => parseInt(i));

// --- Part One ---
let count = 0;
for (let i = 1; i < input.length; ++i) {
  if (input[i] > input[i - 1]) {
    count += 1;
  }
}

console.log(`Solution for part 1: ${count}`);

// --- Part Two ---
count = 0;
for (let i = 3; i < input.length; ++i) {
  if (input[i] > input[i - 3]) {
    count += 1;
  }
}

console.log(`Solution for part 2: ${count}`);
