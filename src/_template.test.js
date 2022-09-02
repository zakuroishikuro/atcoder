const path = './' + module.filename.replace(/.*\/|\.test/g, '')
const { solve } = require(path)

const examples = `

example
------
answer
======
example
------
answer

`.trim()

examples.split('======').forEach((example, i) => {
  const [input, expected] = example.split('------').map(s => s.trim())

  test(`solve example ${i + 1}`, () => {
    const actual = solve(input).toString()
    expect(actual).toEqual(expected)
  })
})
