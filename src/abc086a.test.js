const path = './' + module.filename.replace(/.*\/|\.test/g, '')
const { solve } = require(path)

const examples = `

3 4
------
Even
======
1 21
------
Odd

`.trim()

examples.split('======').forEach((example, i) => {
  const [input, expected] = example.split('------').map(s => s.trim())

  test(`solve example ${i + 1}`, () => {
    const actual = solve(input).toString()
    expect(actual).toEqual(expected)
  })
})
