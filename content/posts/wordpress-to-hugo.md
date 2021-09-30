---
title: "バッカムブログをWordpressからHugoへ移行しました"
description: "wordpressブログをhugoに移行しnetlifyへのデプロイするまでにやったことリスト"
slug: "wordpress-to-hugo"
date: 2020-10-28T10:37:05+09:00
published: true
tags: ["hugo"]
cover_image: /images/uploads/hugo-logo.png
categories: ["技術"]
---

[弊社コーポレートサイト backham.me](https://backham.me) がリニューアルされて[netlify](https://netlify.com)に移行したのにあわせて、同ドメインのサブディレクトリで運用していたバッカムブログもnetlifyに移すことになりました。

そしてnetlifyといえば静的サイトジェネレータ！ということでwordpressからhugoに移行しました。


## hugoとは

{{< figure src="/images/hugo-logo.png" alt="hugo" >}}

https://gohugo.io/

"The world’s fastest framework for building websites"

世界一速くウェブサイトを作れるフレームワーク


## hugo セットアップ

ほぼ[オフィシャルのQuickStart](https://gohugo.io/getting-started/quick-start/)そのままです。

自分のmacにhugoを入れます。brewを使います。

`$ brew install hugo`

確認

`$ hugo version`


## ブログの初期設定

サイトを作る

`$ hugo new site backham_blog`

## テーマ追加

使う[テーマ](https://themes.gohugo.io/)を選んで`/themes`ディレクトリにclone。今回使ったのはmainroadというテーマです。

`$ cd themes`

`$ git clone https://github.com/Vimux/Mainroad.git`

cloneしたテーマ自体もgit管理されているので、submoule化してそこもgit運用していくのがベストプラクティスらしいのですが、今回はテーマディレクトリの`.git`ディレクトリを消してhugoレポジトリに含めて管理しています。

## サイトの設定

ルートにある `config.toml` を編集

`theme = "mainroad"`

## その他の設定

サイト名、記事URLパターンなど `config.toml` にいろんな設定項目あります。[設定例](https://github.com/Vimux/mainroad#configtoml-example)。

cssは `/theme/使っているテーマ/assets`

テンプレートは `/theme/使っているテーマ/layout` 細かくモジュール化されています。


## wordpressのデータをエクスポート

WordPress to Hugo Exporterを使います。

https://github.com/SchumacherFM/wordpress-to-hugo-exporter

上記のレポジトリからzipファイルをダウンロード。既存のwordpress管理画面でプラグインとして追加。有効にするとツールメニューに出てくるのでクリック。記事データが画像込みでダウンロードされてくるので保存。

使うのはこの２つ↓

```
/posts ← 記事データ（mdファイル）
/wp-content ← 画像
```

`posts`ディレクトリはルートに、`wp-content`は`images`にリネームして`static`フォルダに入れました。

## 記事内のタグ、パス置換

imgタグ、aタグ、コード記述部分のバックティックなどをmarkdown形式に置換。あと画像パスも`images`に置換。

vscodeの検索置換でやりました。ここが一番時間かかりました。

## デプロイ

netlifyと連携させるレポジトリを新規作成。今回はbitbucketを使用。

netlifyの管理画面でサイト追加。作ったレポジトリと連携。ビルド設定は以下でやりました。

Build command: `hugo`

Publish directory: `public`

設定が完了すると初回のビルドが始まります。とりあえずランダムに振られたサブドメインで表示確認 → OK!



## 記事追加
`$ cd backham_blog`

レポジトリから最新をpull

新規記事作成

`$ hugo new posts/hello-world.md`

生成されたmarkdownファイルに記事を書く。

ちなみに、マークダウンファイルの先頭部分は記事のプロパティが記述されています。デフォルト設定は `/archetypes/default.md` に記載。今のところこんな感じ。

```
---
title: "{{ replace .Name "-" " " | title }}"
slug: ""
description: ""
date: {{ .Date }}
published: true
categories: ["", ""]
image: ""
categories: ["", ""]
---
```

`type: post`が入ってないとブログ記事として扱われないようで、記事リストに上がってこなかった。

`slug:` はURLに使われる文字列。config.tomlで設定しています（後述）。空白時はtitleが使われる。URLに日本語使いたくない場合などに。

本記事の場合は `slug: "wordpress-to-hugo"`

## ローカルで確認

`$ hugo server -D`

`-D`フラグで draft記事も表示される。


## 記事ステータスを公開にする
```
published: true
↓
published: true
```

## 公開

コミットして

`$ git push origin master`

---

## hugo独自の?markdown

### 画像挿入

`static/images` に画像保存して

`｛{< figure src="/images/foo.png" alt="foo" width="100" height="100" >}｝`

### 画像タグ リンク付き

`｛{< figure link="https://blog.backham.me" src="/images/foo.png" >}｝`

*｛｝を全角にしています。

---

## ドメイン設定
サブドメイン`blog.backham.me`を今回作ったnetlifyのサイトに向ける。ちょっと待って表示を確認する。


## 旧ドメインからのリダイレクト

```
http://backham.me/blog
↓
https://blog.backham.me
```

まずは、wordpressで使っていたパスと合わせる。`config.toml`にパーマリンク設定追加。

```
[permalinks]
  posts = "/:year/:month/:day/:slug/"
```

`backham.me`からのリダイレクトなので、`backham.me`のレポジトリに `netlify.toml` 追加してリダイレクトルール記載。

```
[[redirects]]
  from = "/blog/*"
  to = "https://blog.backham.me/:splat"
  status = 301
  force = true
```

`*` が `:splat`部分に入って転送される。試しにgoogleさんにインデックスされている記事をクリックしてみる。転送された。

## rssの登録

googleさんに記事が素早くインデックスされるように[サーチコンソール](/2019/11/07/google-search-console/)にrssを登録する。

postsのrssを発見。

`https://blog.backham.me/posts/index.xml`

ルート階層にもあった。サイト全体のコンテンツフィードはこちらになる模様。

`https://blog.backham.me/index.xml`

サーチコンソールに両方登録した。

## 感想
- 記事の置換部分に手間がかかったが、その他は想像以上に簡単だった。
- 管理画面にログインせずに`git push`でデプロイできるのは心地よい。
- 今回はhugoの基本部分だけですが、気になっていたフレームワークに触る機会が持ててよかった。
- 自分でセットアップすると記事書きたくなりますね😊


