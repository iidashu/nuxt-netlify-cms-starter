---
title: Unityで連番レンダリングできる「Renderator Pro」の使い方
author: david
date: 2016-11-06T07:00:57+00:00
slug: unity-renderator-pro
published: true
categories:
  - 技術
tags:
  - unity

---
Unityでレンダリングできる有料アセット「Renderator Pro」の使い方

## **「[Renderator Pro](http://u3d.as/nXN)」**

簡単にUnityでレンダリングができるようになります。作ったゲームのシーンとかプロモの動画とかもこれを使えば簡単にできるのではないかと思います。

## 使い方

インポートしたRenderator Proをカメラにアタッチするだけで、あとはインスペクタから各種設定をしてPlayボタンを押すだけでどんどんレンダリングをはじめます。

メインカメラにRenderator\_PRO\_EN.csをアタッチします

{{< figure class="alignnone size-full wp-image-114" src="/images/uploads/3edcdc4e4b6d8a1eea0a7db618767448.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-4" width="509" height="583" >}}

はじめに設定アイコンからChoose save folderを選んでレンダリングした連番ファイルの保存フォルダを選択します。

{{< figure class="alignnone size-full wp-image-115" src="/images/uploads/aef814cc2ecd072df097201895573534.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-6" width="543" height="563" >}}

するとインスペクタのPathにフォルダが表示されるので、他の設定をします。

{{< figure class="alignnone size-full wp-image-116" src="/images/uploads/9920bdfa570aa516e64b672aadc784de.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-7" width="496" height="536" >}}

{{< figure class="alignnone size-full wp-image-117" src="/images/uploads/03426cbaf6d146e308240fc31de17b4e.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-9" width="520" height="571" >}}

width:画像の幅

height:画像の高さ

Length:時間をMinutes,Secondsで設定

Framerate:秒あたりのフレーム数

上記のキャプチャは、幅800ピクセル、高さ600ピクセルの解像度で秒間３０フレームで５秒間のレンダリング設定、あとはQuit Play Modeにチェックを入れるとレンダリング後に動画で再生してくれます。

最後にPlayボタンを押してレンダリング開始。簡単でしかもGPUレンダリングなので早くて素晴らしいです。

## ffmpegでpng連番をmp4にする

&nbsp;  
`ffmpeg -r 24 -i Render%05d.png -vframes 479 -codec libx264 -pix_fmt yuv420p -r 24 out.mp4`

 [1]: http://backham.me/blog/wp-content/uploads/2016/10/3edcdc4e4b6d8a1eea0a7db618767448.png
 [2]: http://backham.me/blog/wp-content/uploads/2016/10/aef814cc2ecd072df097201895573534.png
 [3]: http://backham.me/blog/wp-content/uploads/2016/10/9920bdfa570aa516e64b672aadc784de.png
 [4]: http://backham.me/blog/wp-content/uploads/2016/10/03426cbaf6d146e308240fc31de17b4e.png