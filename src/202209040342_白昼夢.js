console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  // 無理。わかんない。
  return input.trim().replace(/dreamereraser|dreameraser|dreamer|dream|eraser|erase/g, "") ? "NO" : "YES";
}
