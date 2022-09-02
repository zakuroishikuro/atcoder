const solve = input => {
  const int = s => parseInt(s)
  const [a, b] = input.split(/\s+/).map(s => parseInt(s))
  return (a * b) % 2 ? 'Odd' : 'Even'
}

if (module.id != '.') {
  module.exports = { solve }
} else {
  console.log(solve(require('fs').readFileSync(0, 'utf8')))
}
