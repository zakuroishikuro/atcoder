console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const r = /(dreamer|dream|eraser|erase)$/;
  while (r.test(input)) input = input.replace(r, "");
  return input ? "NO" : "YES";
}
