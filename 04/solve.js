const fs = require("fs");
let input = fs.readFileSync("input", "utf8").trim().split("\n\n");

let numbers = input
  .shift()
  .split(",")
  .map((x) => parseInt(x));
let boards = input.map((b) =>
  b.split("\n").map((l) =>
    l
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x))
  )
);

function board_has_won(b) {
  let won = b.map((e, i) => e[i]).every((x) => x === "x");
  // Lines
  won = b.some((e) => e.every((x) => x === "x"));
  if (won) {
    return true;
  }
  // Columns
  for (let i = 0; i < input.length; ++i) {
    won = b.map((e) => e[i]).every((x) => x === "x");
    if (won) {
      return true;
    }
  }
  return false;
}

while (input.length > 0) {
  var draw = numbers.shift();
  console.log(draw);
  let replace = (x) => (x == draw ? "x" : x);
  boards = boards.map((b) => b.map((l) => l.map(replace)));
  if (boards.some(board_has_won)) {
    break;
  }
}

let final_board = boards.filter(board_has_won)[0];
let s = (x, y) => x+y;
let sum = final_board.map(l => l.filter((e) => e != "x").reduce(s, 0)).reduce(s);

console.log(`Solution for part 1: ${sum * draw}`);
