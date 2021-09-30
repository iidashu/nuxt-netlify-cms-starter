---
title: REALSENSE D415 を使ってUnityでモーションを取るまでのセットアップ
author: tkut
date: 2018-05-08T02:21:23+00:00
slug: realsense-d415-unity
published: true
categories:
  - 技術
tags:
  - unity

---
※今回はWindowsの説明だけしかしません。その他のOSは以下を参照↓  
<http://download.3divi.com/Nuitrack/doc/index.html>  
[https://github.com/IntelRealSense/librealsense](https://github.com/IntelRealSense/librealsense)

モーションを取るのには、公式のSDKでは難しそうなので、[Nuitrack](https://nuitrack.com/)というSDKを使います。

公式のSDKも入れておいたほうがいいので、入れときましょう。  
[公式SDKのgithub](https://github.com/IntelRealSense/librealsense)  
[公式SDKのインストールファイル場所](https://github.com/IntelRealSense/librealsense/releases)

公式SDKを入れたら、次に[Nuitrack](https://nuitrack.com/)を入れて行きます。

まず最初に、[Nuitrack](https://nuitrack.com/)から、自分のOSにあったものをダウンロードしましょう。有料版と無料版があります。

無料版  
{{< figure class="alignnone size-medium wp-image-509" src="/images/uploads/298f85fc463beab09466a44dd3273a3d-1024x576.png" alt="" width="1024" height="576" srcset="http://blog.backham.me/blog/wp-content/uploads/2018/05/298f85fc463beab09466a44dd3273a3d-1024x576.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2018/05/298f85fc463beab09466a44dd3273a3d-768x432.png 768w, http://blog.backham.me/blog/wp-content/uploads/2018/05/298f85fc463beab09466a44dd3273a3d.png 1386w" sizes="(max-width: 1024px) 100vw, 1024px" >}}  
有料版  
{{< figure class="alignnone size-medium wp-image-511" src="/images/uploads/9d12a6432a6d00aa491d6341ce82e676-1024x576.png" alt="" width="1024" height="576" srcset="http://blog.backham.me/blog/wp-content/uploads/2018/05/9d12a6432a6d00aa491d6341ce82e676-1024x576.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2018/05/9d12a6432a6d00aa491d6341ce82e676-768x432.png 768w, http://blog.backham.me/blog/wp-content/uploads/2018/05/9d12a6432a6d00aa491d6341ce82e676.png 1399w" sizes="(max-width: 1024px) 100vw, 1024px" >}} 

ダウンロードしたら、次はインストールをしましょう。

ダウンロードしたファイルを解凍すると、OpenNI~~~ というインストールファイルがあるのでそれを実行してインストールします。  
{{< figure class="alignnone size-full wp-image-520" src="/images/uploads/307bbe991b907d536ea9549b731ea431.png" alt="" width="586" height="330" >}} 

インストールが完了したら、次に解凍したファイルの中にnuitrackというフォルダーがあるのでそれをC:\直下にコピーします。( 人によっては D:\ )

コピー出来たら、今度はそれにPATH(環境変数)を通します。

PATHは二つ入れます。  
一つは、&#8221; NUITRACK_HOME &#8221; という名前で、値を C:\nuitrack にして環境変数にいれます。

もう一つは、環境変数のPathに C:\nuitrack\bin を追加してください。

以上でPathの登録は終了です。

次にUnityのSDKを入れます。  
以下のDownload SDK and SamplesをクリックするとSDKをダウンロードできます。

{{< figure class="alignnone size-medium wp-image-522" src="/images/uploads/608dedf03748d65e9eeed9bb8824691a-1024x576.png" alt="" width="1024" height="576" srcset="http://blog.backham.me/blog/wp-content/uploads/2018/05/608dedf03748d65e9eeed9bb8824691a-1024x576.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2018/05/608dedf03748d65e9eeed9bb8824691a-768x432.png 768w, http://blog.backham.me/blog/wp-content/uploads/2018/05/608dedf03748d65e9eeed9bb8824691a.png 1134w" sizes="(max-width: 1024px) 100vw, 1024px" >}} 

ダウンロードしたら今度はそれを解凍したら、その中にある &#8221; NuitrackSDK.unitypackage &#8220;をUnity(2017.3.1f1)にインポートしましょう。

以上でセットアップの完了です。