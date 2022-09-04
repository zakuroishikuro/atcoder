console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [bills, target] = input.split(/\s/).map(s => +s);

  // i: 10000 yen
  for (let i = 0; i <= bills; i++) {
    // j: 5000 yen
    for (let j = 0; j <= bills - i; j++) {
      // k: 1000 yen
      const k = bills - i - j;
      const amt = i * 10000 + j * 5000 + k * 1000;
      if (amt == target) {
        return [i, j, k].join(' ');
      }
    }
  }
  return '-1 -1 -1';
}
