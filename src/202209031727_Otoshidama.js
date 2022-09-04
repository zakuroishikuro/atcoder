console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [bills, amount] = input.split(/\s/).map(s => +s);

  // i: 1000 yen
  for (let i = 0; i <= bills; i++) {
    // j: 5000 yen
    for (let j = 0; j <= bills; j++) {
      const cnt = i + j;
      const amt = i * 1000 + j * 5000;
      if (cnt > bills || amt > amount) break;
      // k: 10000 yen
      for (let k = 0; k <= bills; k++) {
        const cnt = i + j + k;
        const amt = i * 1000 + j * 5000 + k * 10000;
        if (cnt > bills || amt > amount) break;
        if (cnt === bills && amt === amount) return [k, j, i].join(' ');
      }
    }
  }
  return '-1 -1 -1';
}
