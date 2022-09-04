console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [first, last] = input.split(/\s+/);
  return [...Array(last - first + 1)].map((_, i) => [++i, 'Fizz', 'Buzz', 'FizzBuzz'][!(i % 3) + !(i % 5) * 2]).join(' ');
}
