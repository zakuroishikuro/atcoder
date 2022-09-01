const solve = (input) => {
  const [a, b, c, s] = input.trim().split(/\s+/).map((v) => +v || v);
  return `${a + b + c} ${s}`;
}

if (module.id == ".") {
  console.log(solve(require("fs").readFileSync(0, "utf8")));
} else {
  module.exports = { solve };
}


