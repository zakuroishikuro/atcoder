# atcoder-js

ほどほどにがんばりたい

# Node.jsのバージョンについて

AtCoderで使われてるNode.jsは12.16.1なのでインストールしておく
https://nodejs.org/docs/latest-v12.x/api/

```sh
nvm install 12.16.1
```

遊ぶ前にnodeのバージョンを設定しておくこと

```sh
nvm use 12
node --version #v12.16.1
```

テストにjestとかavaとか使おうかと思ったけどv12だと動かないっぽいので泥臭く自作した

# 使い方

## npm run new

`npm run new -- FILE_NAME` で `src` フォルダにファイルが作成される

- `yyyymmddHHMM_FILE_NAME.js`
- `yyyymmddHHMM_FILE_NAME.yml`

FILE_NAMEを省略した場合は `probrem` になる

## npm run watch

`src`フォルダの保存したスクリプトを自動実行する
ymlの内容がスクリプトの標準入力に流し込まれる

# 蛇足

関数使わない場合はグローバル汚染とか関係ないから`const` `let`省いてたり普段書くコードとは違います

普段からこんなコード書く狂人じゃないです