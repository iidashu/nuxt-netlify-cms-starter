---
title: "[hugo] ショートコードを使ってコードや動画を埋め込み"
description: ""
slug: "hugo-shortcode"
date: 2020-10-28T16:24:46+09:00
published: true
tags: ["hugo"]
cover_image: /images/uploads/hugo-logo.png
categories: ["技術"]
---

hugoに動画やコードを埋め込む時はショートコードを使います。ショートコードは、組み込み、またはカスタムのテンプレートを呼び出すシンプルなスニペットです。

hugo shortcode: https://gohugo.io/content-management/shortcodes/


*以下参考用のタグの｛｝は全角にしています。

## gist

コードURL: https://gist.github.com/spf13/7896402

タグ: `｛{< gist spf13 7896402 >}｝`

{{< gist spf13 7896402 >}}

## youtube

動画URL: https://www.youtube.com/watch?v=w7Ft2ymGmfc

タグ: `｛{< youtube w7Ft2ymGmfc >}｝`

{{< youtube w7Ft2ymGmfc >}}

## codepen（カスタム）

コードURL: https://codepen.io/sandrapinazo/pen/rNLjYxO

タグ: `｛{< codepen sandrapinazo rNLjYxO >}｝`

{{< codepen sandrapinazo rNLjYxO >}}

カスタムショートコード追加 → 参考: https://foresuke.com/post/hugo_embed/

