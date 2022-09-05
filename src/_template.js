function main(input) {
  return input.nums[0];
}

// prettier-ignore
{
  Object.defineProperties(String.prototype, {
    strip: {get(){return this.trim()}},
    lines: {get(){return this.split(/\r?\n|\r/)}},
    words: {get(){return this.strip.split(/\s+/)}},
    chars: {get(){return [...this]}},
    nums:  {get(){return Int32Array.of(this.words)},
    to_i: {get(){return parseInt(this)}},
    to_f: {get(){return parseFloat(this)}},
  }});
  Object.defineProperties(Number.prototype, {
    ceil: {get(){return Math.ceil(this)}},
    floor: {get(){return Math.floor(this)}},
    to_s: {get(){return this.toString(10)}},
  });
  Object.defineProperties(Array.prototype, {
    sortBy: {value(map=v=>v, des=0){f=[(a,b)=>a-b,(a,b)=>b-a][des]||des;return this.map(v=>[map(v),v]).sort(([a],[b])=>f(a,b)).map(v=>v[1])}},
  })
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
