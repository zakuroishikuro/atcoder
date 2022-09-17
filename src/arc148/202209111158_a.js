function main(input) {
  const A = input.split(/\s+/).slice(1).map(Number);

  const max = A.reduce((a, b) => Math.max(a, b));;

  // たぶんTLE
  let a = Number.MAX_SAFE_INTEGER;
  for (let i = max; i >= 2; i--) {
    a = Math.min(a, new Set(A.map(n => n % i)).size);
  }

  return a;
}

console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
