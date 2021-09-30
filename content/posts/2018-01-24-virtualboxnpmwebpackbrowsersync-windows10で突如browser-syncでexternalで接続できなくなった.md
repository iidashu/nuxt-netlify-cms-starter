---
title: '[VirtualBox][npm][webpack][Browsersync] windows10で突如Browser syncでExternalで接続できなくなった時の対処'
author: david
date: 2018-01-24T04:06:39+00:00
slug: virtualbox-npm-webpack-browsersync-windows10
published: true
categories:
  - 技術
tags:
  - npm

---
  * ネットワーク設定をプライベートにしているか
  * プライベートネットワークのファイアウォールを切っているか

このあたりをまずチェック。それでもダメで半日いろいろとやっててわかったのは、

## VirtualBoxのネットワーク設定で、環境設定＞ネットワーク＞ホストオンリーネットワークの中でアダプターがIPアドレス固定していると、browsersyncがそのIPアドレスでExternalを作る

なのでアダプターの設定を削除。

VirtualBox使うときにはまた追加しましょう。