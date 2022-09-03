console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const a = input
    .split(/\s+/)
    .slice(1)
    .map(n => (+n).toString(2).replace(/.*1/, '').length);
    
  return Math.min(...a);
}
