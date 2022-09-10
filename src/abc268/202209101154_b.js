function main(input) {
  const [s, t] = input.trim().split(/\s+/);
  return t.startsWith(s) ? "Yes" : "No";
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
