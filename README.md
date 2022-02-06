# next-js-word-demo

ワードプロセッサーの見た目だけWebアプリ。

![Imgur](https://imgur.com/79ztlTt.png)

時間なかったので Next.js / MUI / TypeScript で書きました。

# 開発環境構築

## 必要なもの

- Node.js
    - バージョン 14 以降？

## 開発サーバー起動

初回時のみ以下のコマンドを叩く必要があります。

```
npm i
```

そしたら以下のコマンドを叩いて開発サーバーを起動させます。

```
npm run dev
```

叩いたらブラウザで以下のURLを開きます。

http://localhost:3000

## HTML書き出し

以下のコマンドでHTMLの書き出しが行われます。  
`out`フォルダ内に書き出されますので、これをホスティングサービス等で公開すればいいと思います。

```
npm run deploy
```