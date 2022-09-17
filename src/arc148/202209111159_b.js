const dict = { d: 'p', p: 'd' };
const f = (s, l, r) =>
  s.slice(0, l) +
  [...s.slice(l, r)]
    .reverse()
    .join('')
    .replace(/./g, m => dict[m]) +
  s.slice(r);

function main(input) {
  const [N, S] = input.split(/\s+/);

  // たぶんTLE
  const lines = [];
  for (let i = 0; i <= N; i++) {
    for (let j = i; j <= N; j++) {
      lines.push(f(S, i, j));
    }
  }

  return lines.sort()[0];
}

console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
