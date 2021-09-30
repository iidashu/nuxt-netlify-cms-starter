---
title: giboでunity用の.gitignoreを作る
author: david
date: 2016-12-01T22:12:27+00:00
slug: gibo-unity-gitignore
published: true
categories:
  - 技術
tags:
  - git
  - gibo

---
普段MacとWinを行き来するので、Unityで新しいものを作るときにはgitを介して同期をしています。プロトタイプだろうと何だろうとgitなのですが、ちょっとだけ面倒くさかったのが.gitignoreを作るとき。コピペしてるだけなんだけどそれすら面倒くさいなというのがあったのでgiboを使ってサクッと追加するようにしました。

[気付いたら.gitignoreはgiboで自動生成する時代になっていた](http://qiita.com/tmknom/items/c4bcebe17d25381fa45d)

こちらを参考にgiboをbrewからmacに入れます。あとは、

`gibo unity >> .gitignore` 

これだけ！むちゃくちゃ簡単