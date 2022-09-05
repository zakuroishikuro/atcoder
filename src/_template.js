const lines = str => str.split(/\r?\n|\r/);
const words = str => str.trim().split(/\s+/);
const ints = str => Int32Array.from(str.trim().split(/\s+/));
const floats = str => Float64Array.from(str.trim().split(/\s+/));
// prettier-ignore
const sortBy = (arr,map=v=>v,des=0)=>{var f=[(a,b)=>a-b,(a,b)=>b-a][des]||des;return arr.map(v =>[map(v),v]).sort(([a],[b])=>f(a,b)).map(v=>v[1])};

function main(input) {
  return words(input)[0];
}

console.log(main(require('fs').readFileSync(0, 'utf8')));
