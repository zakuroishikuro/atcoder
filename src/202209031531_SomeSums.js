console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const sumDigits = n => [...('' + n)].map(s => +s).reduce((x, y) => x + y);

  const [n, a, b] = input.split(/\s+/).map(s => +s);

  return [...Array(n)].reduce((x, _, i) => {
    const sum = sumDigits(i + 1);
    if (a <= sum && sum <= b) x += i + 1;
    return x;
  }, 0);
}
