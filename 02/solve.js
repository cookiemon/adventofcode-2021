const fs = require("fs");
const input = fs
  .readFileSync("input", "utf8")
  .trimEnd()
  .split("\n")
  .map((l) => {
    const [word, num] = l.split(" ");
    return [word, parseInt(num)];
  });

// --- Part One ---
let horizontal = 0;
let vertical = 0;
for (let [word, num] of input) {
  if (word == "forward") {
    horizontal += num;
  } else if (word == "down") {
    vertical += num;
  } else if (word == "up") {
    vertical -= num;
  } else {
    throw "WAT?";
  }
}
console.log(`Solution for part 1: ${horizontal * vertical}`);

// --- Part Two ---
horizontal = 0;
vertical = 0;
let aim = 0;
for (let [word, num] of input) {
  if (word == "forward") {
    horizontal += num;
    vertical += aim * num;
  } else if (word == "down") {
    aim += num;
  } else if (word == "up") {
    aim -= num;
  } else {
    throw "WAT?";
  }
}
console.log(`Solution for part 2: ${horizontal * vertical}`);
