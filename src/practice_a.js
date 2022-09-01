const solve = (input) => {
  const [a, b, c, s] = input.trim().split(/\s+/);
  return `${+a + +b + +c} ${s}`;
};

if (module.id != '.') {
  module.exports = { solve };
} else {
  console.log(solve(require('fs').readFileSync(0, 'utf8')));
}
