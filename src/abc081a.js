const solve = input => {
  return input.replace(/[^1]/g, '').length
}

if (module.id != '.') {
  module.exports = { solve }
} else {
  console.log(solve(require('fs').readFileSync(0, 'utf8')))
}
