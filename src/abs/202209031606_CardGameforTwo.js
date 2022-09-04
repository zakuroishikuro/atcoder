console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const cards = input
    .split(/\s+/)
    .slice(1)
    .map(s => +s)
    .sort((a, b) => b - a);

  let alice = 0;
  let bob = 0;
  cards.forEach((card, i) => {
    if (i & 1) {
      bob += card;
    } else {
      alice += card;
    }
  });

  return alice - bob;
}
