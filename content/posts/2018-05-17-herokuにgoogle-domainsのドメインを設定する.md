---
title: herokuにGoogle domainsのドメインを設定する
author: david
date: 2018-05-17T00:35:05+00:00
slug: heroku-google-domains
published: true
categories:
  - 技術
tags:
  - google domains
  - heroku

---
Google Domains + HerokuでSSL通信を使ったオリジナルドメインサイトのための設定のための設定  
<https://qiita.com/hidehiro98/items/b1bf98e0921b0d47e2c2>

こちらを参考に設定。

たぶん複数のappがある場合は、heroku cliで、

`heroku domains:add www.yourdomain.com --app appname` 

と直接設定してあげる

追記：

[Herokuに独自ドメインのSSL接続を無料で導入できるようになった話（有料Dynoのみ）][1]  
こちらの手順でSSLを有効にしてあげる

 [1]: https://qiita.com/xiz-tky/items/d19920dfc86f2d8b5501