---
title: Buildee webのメモ
author: tkut
date: 2018-07-25T03:47:44+00:00
published: false
slug: buildee-web
categories:
  - 技術
tags:
  - npm
  - yarn
  - memo

---
## ビルドエラーについて

エラーが出た場合、以下を確認する。

  * nodeのバージョンを**v8.9.0以上** にする。
  * npmのバージョンを**5.5.1以上**にする。
  * グローバルに**yarn**を入れる。
  * **yarn**で、モジュールをインストールする。

※ セミコンのエラーが出た場合、表示されている箇所を直すとエラーが解決する。(サーバーを再起動する必要があるかも)

## typescriptについて

デモ :



## styled componentについて

styled componentは、cssをコンポーネント単位で記述できるモジュールです。

github : <https://github.com/styled-components/styled-components>

デモ : 



参考記事 :

[公式ドキュメント][1]

[styled-components-Qiita][2]

## formikについて

formikは、formの処理を簡単にしてくれるモジュールです。

github : <https://github.com/jaredpalmer/formik>

デモ :



参考記事 :

[FormikでReactに簡単にフォームを導入！！ ~0からreact習得記 day 17~][3]

 [1]: https://www.styled-components.com/docs
 [2]: https://qiita.com/makotot/items/8f685fa5ba26d9f4222d
 [3]: https://qiita.com/ryo_t/items/6aa7d14e34826149ec86