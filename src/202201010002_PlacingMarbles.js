console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input){
  return input.replace(/[^1]/g, '').length;
}