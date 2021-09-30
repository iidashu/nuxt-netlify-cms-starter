---
title: Zero Latency VR のVRの仕組みについて
author: david
date: 2016-11-19T06:20:46+00:00
slug: zero-latency-vr
published: true
tags:
  - VR
  - 体験
categories:
  - 技術

---
念願のZero Latency VRを体験してきました。平日の朝から一緒にやってくれる友達もいないので1人で予約しました。

きっちり開始時間の２０分前にはちゃんと受付済まして待機。が、他のプレイヤーは時間になっても現れず、あわや本当に1人で全ゾンビを相手にしないといけない状況に。。

しびれを切らしたお姉さんがゲームの説明を開始してしばらくすると、他のプレイヤー５人（中国人）が１０分遅れでやってくる。どうしてもやりたいということで急遽15分遅れくらいで５人も参加するも日本語も通じずなかなかゲーム開始まで辿り着かない。。Baiduでデザイナーしてた頃の同僚中国人はみんな本当に礼儀正しかったし、真面目だったので、こういう一部のマナーの悪い中国人ばかり日本に旅行に来ているんだろうなと言い聞かせつつ、ただただ開始するのを待ってました。オペレーション大変だな、これはこれで珍しい経験できました。

で、Zero Latency VRの遊び方とかルールはネットに色々書かれてて、私も行く前に多少読んでいきました。そのあたりは割愛して、Zero Latency VRをVR開発者視点で書きます。というかやる前もやっている時もテンション上がってて全くそういう視点で見ていなかったので、思い出しながら書きます。

## VRのデバイスと仕組み

まずVRのHMDはOSVR HDK2を使ってます。うちにもハッカソンでいただいたOSVRがありますが、ちゃんと動いたことがないので、OSVRがちゃんと動くということにまず驚きました。

{{< figure class="alignnone size-full wp-image-185" src="/images/uploads/osvr.jpg" alt="osvr" width="1090" height="583" srcset="http://blog.backham.me/blog/wp-content/uploads/2016/11/osvr.jpg 1090w, http://blog.backham.me/blog/wp-content/uploads/2016/11/osvr-1024x548.jpg 1024w" sizes="(max-width: 1090px) 100vw, 1090px" >}}

HMDの上にPSMoveのコントローラみたいなLEDが２つついていて、これを検知してプレイヤーの見ている方向と位置を追従しています。最大6人で遊べるので、部屋の周りにこのLEDを検知するセンサーもしくはカメラが配置されているのだと思います。

銃にも２つのLEDがついていて、これがHMDと同様に銃の方向と位置を追従できるようになっています。

{{< figure class="alignnone size-full wp-image-186" src="/images/uploads/gun.jpg" alt="Zero Latency VR" width="1543" height="659" srcset="http://blog.backham.me/blog/wp-content/uploads/2016/11/gun.jpg 1543w, http://blog.backham.me/blog/wp-content/uploads/2016/11/gun-1024x437.jpg 1024w" sizes="(max-width: 1543px) 100vw, 1543px" >}}

でゲームをやってて気づいたのは、体と銃だけでVR内のプレイヤーの体全体をレンダリングしていて、自分から他のプレイヤーもちゃんと見える。ただあまりにゾンビの攻撃が激しく、ゆっくりそのあたりのモデルの繋がりかたとか握り方がどうなっているのかとかを見れなかったのが残念。次回はゲーム始まる前にもっとじっくり色々確認したいですね。

それとポイントは、部屋の床全面に描かれている白いグリッドです。このグリッドから床の面を検知して、ゲーム中のオブジェクトを配置したり、プレイヤーの視線の高さもこの平面を基準に追従していると思われます。それと奥行きの距離も計れるので、空間を把握するには一番やりやすい方法かもしれないです。MRに近い。

{{< figure class="alignnone size-full wp-image-188" src="/images/uploads/floor.jpg" alt="Zero Latency VR" width="800" height="339" >}}

LEDのマーカーによるプレイヤーの回転 + 位置情報と、グリッドによる床の平面情報を使ってVR空間を作ってます。

## ステージのデザイン

Zero Latency VRは１階と２階をエレベーターで行き来できるステージのデザインになっています。VRなのでVR空間上は２階とはいえ実空間では１階と同じ平面上にあります。普通に考えたら１つの平面上に別のレイヤーで人が歩くと、絶対にぶつかってしまうはずなのですが、それをどうやって解決しているのかが実は一番知りたかったことでした。

やってみたらすぐに解決しました。実は１階部分と２階部分はゲーム内では同一の座標（この場合xとz座標）には存在しないようにデザインされていました。１階部分は現実空間の内側だけを使い、２階部分は現実空間の外側だけを使ってます。

{{< figure class="alignnone size-full wp-image-192" src="/images/uploads/space1.png" alt="space" width="800" height="600" >}}

これだと絶対にぶつかりません。単純なのですがステージのデザインでそこの問題を吸収していてよく考えられているなと思いました。逆にVR内でxとz座標が同じ複数の階を作るのは難しそうです。

 [1]: http://backham.me/blog/wp-content/uploads/2016/11/osvr.jpg
 [2]: http://backham.me/blog/wp-content/uploads/2016/11/gun.jpg
 [3]: http://backham.me/blog/wp-content/uploads/2016/11/floor.jpg
 [4]: http://backham.me/blog/wp-content/uploads/2016/11/space1.png