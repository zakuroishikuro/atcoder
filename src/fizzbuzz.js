console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

function main(input) {
  const [first, last] = input.split(/\s+/);
  return [...Array(last - first + 1)].map((_,i)=>[["Fizz"][++i % 3], ["Buzz"][i % 5]].join("") || i).join(" ")
}
