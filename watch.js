const { fork } = require('child_process');
const { watch } = require('chokidar');
const { load } = require('js-yaml');
const { readFileSync } = require('fs');

const red = str => '\x1b[31m' + str + '\x1b[0m';
const green = str => '\x1b[32m' + str + '\x1b[0m';

const TLE_MS = 5000; // Time Limit Exceeded

watch('./src', { persistent: true }).on('change', path => {
  console.log(`*** file changed [${path}] ***`);

  const js = path.replace(/\..+$/, '.js');
  const yml = path.replace(/\..+$/, '.yml');

  const examples = load(readFileSync(yml)).slice(1);

  let i = 0;
  let failedCount = 0;
  for (let { input, output: expected } of examples) {
    const startTime = Date.now();

    input = input.trim();
    expected = [expected].flat().map(e => e.trim());

    const child = fork(js, { stdio: 'pipe' });
    const { stdin, stdout, stderr } = child;
    stdout.setEncoding('utf8');
    stderr.setEncoding('utf8');
    stdout.on('data', actual => {
      actual = actual.trim();
      const failed = !expected.includes(actual);
      if (failed) {
        process.stdout.write(red('x'));
        failedCount++;
      } else {
        process.stdout.write(green('o'));
      }
      console.log(` [${Date.now() - startTime}ms] actual:[`, actual, `] expected:`, expected);
      if (failed) console.log(red(`--- input: \n${input}\n`));
      if (++i == examples.length) {
        if (failedCount == 0) {
          console.log(green('ooo all passed! ooo\n'));
        } else {
          console.log(red(`xxx ${failedCount} failed xxx\n`));
        }
      }
      clearTimeout(tleTimer);
    });
    stderr.on('data', console.error);

    stdin.write(input);
    stdin.end();

    const tleTimer = setTimeout(() => {
      console.log(red(`x [${Date.now() - startTime}ms] Time Limit Exceeded:\n--- input: \n${input}\n`));
      child.kill();
    }, TLE_MS);
  }
});
