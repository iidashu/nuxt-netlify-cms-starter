---
title: アナリティクスに正しいページタイトルが送信されているかチェックする方法
author: しゅーいっち
date: 2019-10-18T02:58:32+00:00
slug: check-if-ga-sends-correct-pv-title/
cover_image: Screen-Shot-2019-10-18-at-11.55.29.png
published: true
categories:
  - 技術
tags:
  - "google analytics"
  - SEO

---
こんにちは、フロントエンドのフレームワークを使っていたりすると設定したページタイトルがきちんとアナリティクスに送られているのか気になりますよね？

クローム拡張を使って簡単にチェックしましょう。

Tag assistant (by google)  
<https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk>

追加したツールバーにスマイル君が横になった荷札みたいなアイコンが出てきます。  
{{< figure src="/images/uploads/Screen-Shot-2019-10-18-at-11.59.36.png" alt="" width="271" height="46" class="alignnone size-full wp-image-699" >}}

chromeに追加したら目的のサイトに移動  
↓  
緑色か青色になっていることを確認（なっていなければそもそもの計測タグまたはタグマネージャタグになにか不具合が発生している可能性大）  
↓  
Enable をクリックして有効にする  
↓  
以下gif参照（ポインタでURLバーを指してるところが始まりです）

{{< figure src="/images/uploads/pv-title-check.gif" alt="" width="600" height="735" class="alignnone size-full wp-image-695" >}} 

google tag assistantの詳細はこちら↓  
[Tag Assistant Recordings を使用する](https://support.google.com/analytics/answer/6277313)