console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [c500, c100, c50, target] = input.split(/\s+/).map(s => +s);

  let count = 0;
  for (let i = 0; i <= c500; i++) {
    for (let j = 0; j <= c100; j++) {
      for (let k = 0; k <= c50; k++) {
        const amount = i * 500 + j * 100 + k * 50
        if (amount == target) {
          count++;
        }
      }
    }
  }

  return count;
}
