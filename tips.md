# Node.js v12 について

- AtCoder の Node.js のバージョンは 12.16.1
  - `nvm install 12.16.1`
  - `nvm use 12.16.1`
- 思ったより v18 と違わない
- https://node.green/
  - v12 と v18 の差分表示 https://gist.github.com/zakuroishikuro/6b2c98b82c78aafb9ffc7c5b4939045c

## 主な使えない機能

- nullish のやつ
  - `??`
  - `?.`
  - `??=`
- ビット演算の代入
  - `||=`
  - `&&=`
- `str.matchAll`
- `str.replaceAll`
- `arr.at`
- `arr.findLast`
- `arr.findLastIndex`
- `Object.hasOwn`

# ビット演算子

- 32 ビットの **整数** にされるので注意
  - 4,294,967,296 より大きくなる可能性があれば使わない (10^9 以上になると書かれてあったら使わない)
- 奇数: `n & 1`
- 偶数: `~n & 1`
- 小数切り捨て: `n | 0`
- `n * 2`: `n << 2`
- `n / 2`: `n >> 2`
- ビットを扱う場合は文字列にするのもいい `n.toString(2)` 逆は`parseInt(n, 2)`

# 変換

- 数値から文字列: `+n` 数値にできない場合は`NaN`
  - `+'12nyan'` -> NaN
  - `parseInt("12nyan")` -> 12
- 文字列から数値:
  - `n.toString()`
    - n進数に変換: `(31).toString(2)`
  - `''+n`

# 入力

- 標準入力をいったんinputに全て読み込む `const input = require('fs').readFileSync(0, 'utf8').trim()`
- 行ごとに分ける必要があるとき: `input.split(/\n/)`
- 行ごとに分ける必要がないとき: `input.split(/\s+/)`
- 1行目は全体の行数が書いてあることが多く、使用しないので無視: `input.split(/\s+/).slice(1)`
- 全て数値にする: `input.split(/\s+/).slice(1).map(s => +s)`

# 配列

- 重複削除
  - `[...new Set(ary)]`
  - `ary.filter((v,i,a)=>!a.slice(0,i).includes(v))`
