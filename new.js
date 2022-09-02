const { copyFile } = require('fs/promises')
const time = new Date().toISOString().split(/\D/).slice(0, -2).join('')
const name = `${time}_${process.argv[2] ?? 'problem'}`

const cp = [`src/_template.js`, `src/${name}.js`]
copyFile(...cp)
copyFile(...cp.map(s => s.replace(/\.js/, '.test.js')))

console.log(`created: ${name}.js`)

