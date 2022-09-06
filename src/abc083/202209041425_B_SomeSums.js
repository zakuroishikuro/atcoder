console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [n, a, b] = input.split(/\s/).map(s => +s);

  const sumDigits = n => {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = (n / 10) | 0;
    }
    return sum;
  };

  return [...Array(n)]
    .map((_, i) => i + 1)
    .filter(n => {
      const sum = sumDigits(n);
      return a <= sum && sum <= b;
    })
    .reduce((a, b) => a + b, 0);
}
