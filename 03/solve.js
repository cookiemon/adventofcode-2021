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
let o2 = input;
let pos = 0;
while (o2.length > 1) {
  let zeros = o2.filter((x) => x[pos] == "0");
  let ones = o2.filter((x) => x[pos] == "1");
  if (zeros.length > o2.length / 2) {
    o2 = zeros;
  } else {
    o2 = ones;
  }
  pos += 1;
}
o2 = parseInt(o2[0].join(""), 2);

let co2 = input;
pos = 0;
while (co2.length > 1) {
  let zeros = co2.filter((x) => x[pos] == "0");
  let ones = co2.filter((x) => x[pos] == "1");
  if (zeros.length <= co2.length / 2) {
    co2 = zeros;
  } else {
    co2 = ones;
  }
  pos += 1;
}
co2 = parseInt(co2[0].join(""), 2);

console.log(`Part 2 solution: ${o2 * co2}`);
