const BITS = 12;

const fs = require("fs");
let input = fs
  .readFileSync("input", "utf8")
  .split("\n")
  .map((x) => x.split(""));

// --- Part One ---
let counts = Array(BITS).fill(0);
for (let line of input) {
  line = line.map((x) => parseInt(x));

  for (let i = 0; i < line.length; ++i) {
    counts[i] += line[i];
  }
}

let binary_gamma = counts
  .map((x) => (x > input.length / 2 ? "1" : "0"))
  .join("");
let gamma = parseInt(binary_gamma, 2);
let epsilon = ~gamma & ((1 << BITS) - 1);
console.log(`Part 1 solution: ${gamma * epsilon}`);
