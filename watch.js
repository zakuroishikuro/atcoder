const { fork } = require('child_process');
const { watch } = require('chokidar');
const { load } = require('js-yaml');
const { readFileSync } = require('fs');

watch('./src', { persistent: true }).on('change', path => {
  console.log(`*** file changed [${path}] ***`);

  const js = path.replace(/\..+$/, '.js');
  const yml = path.replace(/\..+$/, '.yml');

  const examples = load(readFileSync(yml)).slice(1);

  let i = 0;
  let failed = 0;
  for (let { input, output: expected } of examples) {
    input = input.trim();
    expected = expected.trim();

    const { stdin, stdout, stderr } = fork(js, { stdio: 'pipe' });
    stdout.setEncoding('utf8');
    stderr.setEncoding('utf8');
    stdout.on('data', actual => {
      actual = actual.trim();
      if (actual != expected) {
        console.log(`* failed! \n- input: \n${input}\n\n- expected: ${expected}\n- actual: ${actual}\n`);
        failed++;
      }
      if (++i == examples.length) {
        if (failed == 0) {
          console.log('ooo all passed! ooo\n');
        } else {
          console.log(`xxx ${failed} failed xxx\n`);
        }
      }
    });
    stderr.on('data', console.error);

    stdin.write(input.trim());
    stdin.end();
  }
});
