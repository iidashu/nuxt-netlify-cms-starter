---
title: THETAとスマホでWi-Fi接続できない場合の対処法
author: Miles
date: 2020-10-16T07:18:32+00:00
published: true
slug: connect_theta_to_smartphone_via_wi-if/
tags:
  - android
  - ios
  - THETA
categories:
  - 技術

---

{{< figure src="/images/uploads/ad4d03b2387d8491ab2937b5a437ea49.png" alt="" width="422" height="558" >}}

RICOH THETA Vで360度画像の撮影を試みるも、THETAとスマホでWi-Fi接続が上手く接続できず、困りました。。

**先に結論を書いておくと、THETAのWi-fi帯域を5Gに変更すること、ファームウェアを最新にすることがポイントでした。**

また、THETAのWi-Fi接続には、以下の２種類があります。

  1. THETAから発信するWi-Fiで直接とスマホを接続する方法
  2. ルーターのWi-Fiを介して、THETAとスマホを接続する方法

<p style="text-align: left">
  今回は、<strong>&#8220;1.THETAから発信するWi-Fiで直接とスマホを接続する方法&#8221;</strong>について、基本的な方法とチェックポイントを纏めます。
</p>

※THETA公式アプリのバージョンによっては、記載内容と異なる場合があるかもしれません。ご了承ください。

&nbsp;

#### 基本接続方法

##### 0.事前準備

Androidの場合は&#8221;Google Play Store&#8221;、iPhoneの場合は&#8221;Apple Store&#8221;から&#8221;RICOH THETA&#8221;(以下、公式アプリ)をダウンロードします。

##### 1.本体起動

右側面の電源ボタンを長押しで起動。次に右側面のWi-Fiボタンを長押し。  
本体正面のカメラとWi-Fiのアイコンが付いていることを確認。  
Wi-Fiアイコンは青色の点滅状態（接続先確認待ち）

{{< figure class="size-full wp-image-836 aligncenter" src="/images/uploads/a82258aa0eb060966c648bc579f544c3.png" alt="" width="421" height="565" >}} 

&nbsp;

##### 2.THETA Wi-Fiに接続

Android(またはiPhone)の設定->Wi-FiからTHETAのWi-Fiを選択。  
（例：画像参照)

{{< figure class="size-full wp-image-838 aligncenter" src="/images/uploads/3e59d57e319aa151ec79f9ab74f89c62.png" alt="" width="337" height="599" >}}  
パスワードは、THETA本体下部参照。最初の2文字は抜いて入力。  
(例:YL123456 ->123456と入力)

接続が上手くいくと、Wi-Fiアイコンが青色の点滅状態から青色の常時点灯に変わります。

##### 3.公式アプリから&#8221;Wi-Fi周波数帯域&#8221;を変更する

&#8220;設定&#8221;メニューを開いて、&#8221;Wi-Fi周波数帯域&#8221;を&#8221;5GHz&#8221;を選択。

{{< figure class="size-full wp-image-839 aligncenter" src="/images/uploads/85b85e58a7c2fdac4098581bc0cfc941.png" alt="" width="350" height="620" >}}  
※手順2.でTHETAに接続できていないと&#8221;WI-FI周波数帯&#8221;は設定のメニューに表示されません。

接続確認として、アプリの撮影ボタンを押して、カメラを起動->撮影ができれば接続完了です。

それでも上手くいっていないという方は、以下にチェックリストを作成しましたのでご確認ください。

&nbsp;

#### THETA 設定チェックリスト

**・THETAアプリで撮影ができましたか。**

<span style="font-weight: 400">THETA公式アプリで、THETAと正しく接続できていることを確認してください。</span>

**・****THETA****公式アプリで&#8221;Wi-Fi周波数帯域&#8221;を&#8221;5GHz&#8221;****に設定しましたか**<span style="font-weight: 400">。</span>

<span style="font-weight: 400">環境によっては5Gでないとうまく接続できない場合があります。</span>

**・THETAのWi-Fiに接続できましたか。**

<span style="font-weight: 400">他の端末でTHETAのwifiに接続している場合は、切断してください。THETAのwifiには1台しか接続できません。</span>

**・****THETAのファームウェアは最新の状態ですか。**

<span style="font-weight: 400">出荷時のファームフェアが古い場合、THETA Web APIのバージョンも古い場合があります。THETA公式アプリよりファームフェアを最新に更新してください。</span>

**・THETAのカメラ設定のオートスリープはOFFになっていますか。**

<span style="font-weight: 400">デフォルトは3分でオートスリープとなっているので、THETA公式アプリよりオートスリープをOFFにしてください。</span>

{{< figure class="wp-image-807 alignleft" src="/images/uploads/vrmonkey_1024_square.png" alt="" width="100" height="100" srcset="http://blog.backham.me/blog/wp-content/uploads/2020/03/vrmonkey_1024_square.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2020/03/vrmonkey_1024_square-150x150.png 150w, http://blog.backham.me/blog/wp-content/uploads/2020/03/vrmonkey_1024_square-768x768.png 768w" sizes="(max-width: 100px) 100vw, 100px" >}} 

&nbsp;

以上です。お疲れ様でした！