import { transformSync } from 'esbuild';

import * as util from './util/util.mjs';

for (const [name, fn] of Object.entries(util)) {
  const js = `const ${name} = ${fn.toString()}`;
  const min = transformSync(js, { minify: true, target: 'es2019' });
  console.log(min.code.trim());
}
