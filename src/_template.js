const solve = input => {
  return 'answer'
}

if (module.id != '.') {
  module.exports = { solve }
} else {
  console.log(solve(require('fs').readFileSync(0, 'utf8')))
}
