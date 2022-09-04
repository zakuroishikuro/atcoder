const { fork } = require('child_process');
const { watch } = require('chokidar');
const { load } = require('js-yaml');
const { readFileSync } = require('fs');

const red = str => '\x1b[31m' + str + '\x1b[0m';
const green = str => '\x1b[32m' + str + '\x1b[0m';

watch('./src', { persistent: true }).on('change', path => {
  console.log(`*** file changed [${path}] ***`);

  const js = path.replace(/\..+$/, '.js');
  const yml = path.replace(/\..+$/, '.yml');

  const examples = load(readFileSync(yml)).slice(1);

  let i = 0;
  let failed = 0;
  for (let { input, output: expected } of examples) {
    input = input.trim();
    expected = [expected].flat().map(e => e.trim());

    const { stdin, stdout, stderr } = fork(js, { stdio: 'pipe' });
    stdout.setEncoding('utf8');
    stderr.setEncoding('utf8');
    stdout.on('data', actual => {
      actual = actual.trim();
      if (!expected.includes(actual)) {
        process.stdout.write(red('x'));
        failed++;
      } else {
        process.stdout.write(green('o'));
      }
      console.log(` actual:`, actual, `expected:`, expected);
      if (++i == examples.length) {
        if (failed == 0) {
          console.log(green('ooo all passed! ooo\n'));
        } else {
          console.log(red(`xxx ${failed} failed xxx\n`));
        }
      }
    });
    stderr.on('data', console.error);

    stdin.write(input);
    stdin.end();
  }
});
