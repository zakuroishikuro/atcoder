function main(input) {
  const lines = input.lines.slice(1);

  const count = (row, col) => {
    let cnt = 0;
    for (let i = -1; i <= 1; i++) {
      const line = lines[row + i];
      if (!line) continue;
      for (let j = -1; j <= 1; j++) {
        if (line[col + j] == '#') cnt++;
      }
    }
    return cnt;
  };

  return lines.map((row, i) => [...row].map((cell, j) => (cell == '#' ? '#' : count(i, j))).join('')).join('\n');
}

// prettier-ignore
{
  Object.defineProperties(String.prototype, {
    lines: {get(){return this.split(/\r?\n|\r/)}},
  });
  console.log(main(require('fs').readFileSync(0, 'utf8')));
}