---
title: Permissions API でカメラのパーミッションのリクエストは出来ない
author: david
date: 2020-05-18T08:15:50+00:00
slug: permissions-api
published: true
categories:
  - 技術
tags:
  - "'Permissions API'"

---
ブラウザでカメラを使う場合にシステムから使用許可の確認ダイアログが表示されます。iOS safariは毎回表示されるがAndroidのchromeは１度承認または否認すると設定を保持していて、再度明示的に許可確認ダイアログを表示することは出来ない。

[https://developer.mozilla.org/ja/docs/Web/API/Permissions\_API/Using\_the\_Permissions\_API][1]

> しかしながら、ブラウザー機能への将来の追加は `request()` メソッドを提供するべきです、それは私たちが好きなときにいつでもプログラム的にパーミッションを要求することを可能にするでしょう。 うまくいけばこれらはすぐに利用可能になるはずです。

取り消しできる項目もあるがカメラは出来ない

<https://developer.mozilla.org/ja/docs/Web/API/Permissions/revoke#Browser_compatibility>

 [1]: https://developer.mozilla.org/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API