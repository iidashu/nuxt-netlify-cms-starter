---
title: '[xcode] フレームワークの実機ビルドエラーとitunes connectのリジェクトを回避したときのメモ'
author: david
date: 2018-03-03T08:22:12+00:00
slug: xcode-itunes-connect
published: true
categories:
  - 技術
tags:
  - itunes connect
  - xcode

---
carthageで入れたいくつかのライブラリで、実機ビルドでエラーがでたり、エラーを回避してもiTunes Connectでリジェクトされたりして、ハマったのでメモ。

SwiftyDropboox.framework  
SocketIO.framework  
Starscreem.framework

あたりをCarthageでいれてる。いろいろやったのでどれが効果があったのかはっきりよく覚えてないので、やったことをメモ。

Alamofire.frameworkで実機ビルドでエラー  
=> Embedded FrameworkにAlamofire.framework追加して回避

Alamofire.frameworkがiTunes connectでリジェクト  
=> Embedded Frameworkから外して、Run scriptでコピーで回避  
=>Alamofire.frameworkのswiftmoduleからi\_386,x86\_64を削除