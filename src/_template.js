function main(input) {
  return input.ints[0];
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
