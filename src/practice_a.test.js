const path = "./" + module.filename.replace(/.*\/|\.test/g, "");
const { solve } = require(path);

const examples = `

1
2 3
test
------
6 test
======
72
128 256
myonmyon
------
456 myonmyon

`.trim();

examples.split("======").forEach((example, i) => {
  const [input, expected] = example.split("------").map(s => s.trim());

  test(`solve example ${i + 1}`, () => {
    const actual = solve(input);
    expect(actual).toEqual(expected);
  });

});