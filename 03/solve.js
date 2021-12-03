const BITS = 12;

const fs = require("fs");
let input = fs
  .readFileSync("input", "utf8")
  .trimEnd()
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

// --- Part Two ---
function rating(input, condition) {
  let pos = 0;
  while (input.length > 1) {
    let zeros = input.filter((x) => x[pos] == "0");
    let ones = input.filter((x) => x[pos] == "1");
    input = condition(zeros, ones) ? ones : zeros;
    pos += 1;
  }

  return parseInt(input[0].join(""), 2);
}

let o2 = rating(input, (zeros, ones) => zeros.length <= ones.length);
let co2 = rating(input, (zeros, ones) => zeros.length > ones.length);

console.log(`Part 2 solution: ${o2 * co2}`);
