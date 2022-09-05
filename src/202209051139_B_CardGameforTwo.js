console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const a = Uint32Array.from(input.split(/\s+/).slice(1)).sort((a, b) => b - a);
  const [alice, bob] = a.reduce((s, n, i) => [s[0] + n * (~i & 1), s[1] + n * (i & 1)], [0, 0]);
  return alice - bob;
}
