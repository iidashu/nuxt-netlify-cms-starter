---
title: VRのSDKを使わずにUnityでVRの作り方
author: david
date: 2016-11-07T07:10:06+00:00
slug: vr-sdk-unity
published: true
categories:
  - 技術
tags:
  - unity

---
カードボードなどのVRのSDKを入れなくてもUnityでVRを実装する方法を教えてもらったらめちゃくちゃ簡単でした。

## ２眼カメラを作る

まずは２眼のカメラの作り方から。仕組みは簡単で要は右目と左目のカメラを用意して表示範囲を左右半分づつにするだけです。

ヒエラルキーに両目のカメラを入れる空のGameObjectを0,0,0に置く。とりあえずVRHeadと名前をつけて、その中にカメラを２つ配置してEyeLeftとEyeRightと名前をつけます。これがそれぞれ右目と左目用のカメラになるわけですね。

{{< figure class="alignnone size-full wp-image-84" src="/images/uploads/619711bf825e6ec140bd7fd253fae848.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-2016-10-22-21-32-08" width="248" height="219" >}}

このままだとまだ画面は１つなので、

## 画面を２つに分割する

画面を２つに分割します。表示領域を左右に分割して表示すればよくて、まず左目用のEyeLeftを選択してインスペクターの中のCameraを開く。ここのViewport Rectの設定を変更すると表示領域が変わります。画面をRectとして、X,Yで表示開始座標、W,Hで幅と高さを設定してあげます。

左目はこんな感じ

{{< figure class="alignnone size-full wp-image-86" src="/images/uploads/19bda21eab381d59898c697aa4858377.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-2016-10-22-21-35-24" width="362" height="375" >}}

右目はこんな感じ

{{< figure class="alignnone size-full wp-image-87" src="/images/uploads/2d22be70d47732735e8072b75d2688db.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-2016-10-22-21-37-32" width="377" height="331" >}}

これで画面が半分に分割されます。

{{< figure class="alignnone size-full wp-image-88" src="/images/uploads/7077829aac0de50eef1ec59905045f1a.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-2016-10-22-21-38-07" width="575" height="514" >}}

&nbsp;

## デバイスの回転を実装

カメラはできたので、今度はデバイスの回転を拾って画面に回転を反映させる方法。やることは３つです。

1.デバイスのジャイロを使えるようにする

2.ジャイロの回転を拾う

3.VRHeadに回転を反映させる

これだけです。では先ほどのVRHeadに新しくスクリプトRvVRCameraを作ります。

`using UnityEngine;
using System.Collections;

public class RvVRRotation : MonoBehaviour {

	public GameObject Head;

	// Use this for initialization
	void Start () {
		Input.gyro.enabled = true;
	}
	
	// Update is called once per frame
	void Update () {
		
		if (Input.gyro.enabled)
		{
			Quaternion direction = Input.gyro.attitude;
			Head.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-direction.x,-direction.y, direction.z, direction.w));
		}
	}
}
`

まず、

`void Start () {
	Input.gyro.enabled = true;
}`

ここでデバイスのジャイロを有効に

`Quaternion direction = Input.gyro.attitude;`

ここでジャイロの回転を取ってきます

`Head.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-direction.x,-direction.y, direction.z, direction.w));`

VRHeadにジャイロの回転を渡して画面に反映させる

あとはインスペクタのRvVRRotationのHeadにVRHeadを入れてあげればOK

{{< figure class="alignnone size-full wp-image-95" src="/images/uploads/8cc8b38b167d380f4e5c52e8e4fe9ef8.png" alt="%e3%82%b9%e3%82%af%e3%83%aa%e3%83%bc%e3%83%b3%e3%82%b7%e3%83%a7%e3%83%83%e3%83%88-2016-10-22-21-55-50" width="367" height="89" >}}

これだけでスマホでVRができてしまいます！素晴らしく簡単な方法を教えてもらいました。

ただ他のVR用のSDKを入れると解決するのかはわからないのですが、Galaxy S6のジャイロがどうもノイズが多くて酔います。。iPhoneやNexus5ではそうでもないので、端末の問題だと思うんですけど、ローパスフィルタは必須ですね。

 [1]: http://backham.me/blog/wp-content/uploads/2016/10/619711bf825e6ec140bd7fd253fae848.png
 [2]: http://backham.me/blog/wp-content/uploads/2016/10/19bda21eab381d59898c697aa4858377.png
 [3]: http://backham.me/blog/wp-content/uploads/2016/10/2d22be70d47732735e8072b75d2688db.png
 [4]: http://backham.me/blog/wp-content/uploads/2016/10/7077829aac0de50eef1ec59905045f1a.png
 [5]: http://backham.me/blog/wp-content/uploads/2016/10/8cc8b38b167d380f4e5c52e8e4fe9ef8.png