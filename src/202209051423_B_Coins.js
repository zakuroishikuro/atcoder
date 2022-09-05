function main(input) {
  const [a, b, c, x] = input.ints;

  let cnt = 0;
  for (let i = 0, c500 = 0; i <= a; i++, c500 += 500) {
    for (let j = 0, c100 = 0; j <= b; j++, c100 += 100) {
      for (let k = 0, c50 = 0; k <= c; k++, c50 += 50) {
        if (c500 + c100 + c50 == x) cnt++;
      }
    }
  }
  return cnt;
}

// prettier-ignore
{
  Object.defineProperties(String.prototype, {
    lines: {get(){return this.split(/\r?\n|\r/)}},
    words: {get(){return this.trim().split(/\s+/)}},
    chars: {get(){return [...this]}},
    ints:  {get(){return Int32Array.from(this.words)}},
    floats:{get(){return Float64Array.from(this.words)}},
  });
  Object.defineProperties(Array.prototype, {
    sortBy: {value(map=v=>v, des=0){f=[(a,b)=>a-b,(a,b)=>b-a][des]||des;return this.map(v=>[map(v),v]).sort(([a],[b])=>f(a,b)).map(v=>v[1])}},
  })
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
