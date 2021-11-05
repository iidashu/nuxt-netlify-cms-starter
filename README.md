# Netlify CMS template for Gridsome

## ローカル起動
`yarn develop` → `localhost:8080`


## deploy
- github/bitbucket経由でnetlifyにpush

## netlify CMSの設定（見た目、要素など）
`static/admin/config.yml`

## netlifyの設定で CMSを有効にする
IdentityをONにする

https://qiita.com/asahi13/items/ad514eb6cd759be74af2#netlify-identity%E3%81%AE%E8%A8%AD%E5%AE%9A


## CMSログイン

`yourwebsite.com/admin`

local `localhost:3000/admin`

- 招待無しでユーザ登録可能な状態にしておけば、自分のgoogleアカウントでユーザ登録できる


## ルーティング
`gridsome.config.js`

```
  templates: {
    Post: "/:year/:month/:day/:slug",
    Tag: '/tag/:id',
    Category: '/category/:id',
  },
 ```
↓

単一記事
`http://localhost:8080/2021/09/27/backham-intro5/`

カテゴリ記事リスト
`http://localhost:8080/category/PR/`

タグ記事リスト
`http://localhost:8080/tag/mahoumake/`

