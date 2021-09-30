---
title: Blenderから.objをエキスポートしてthree.jsで読み込む時
author: david
date: 2017-03-06T01:51:09+00:00
slug: blender-obj-three-js
published: true
categories:
  - 技術
tags:
  - three.js
  - web
  - webgl
  - 備忘録

---
Blenderから.objをエキスポートすると.mtl内に  
`map_Kd floor.png`

みたいな感じでテクスチャ名が書かれている。three.js上で別にテクスチャを読み込むので、ここの記述は１行いらなく、残しておくとエラーが出る。

&nbsp;

さらに.obj内の記述で  
`usemtl Material.001`  

とマテリアル名が書かれている部分を,  

`usemtl floor`  

のようにfloor.mtlの名前の部分に書き換える。ここはBlender側でついてたマテリアル名がデフォで記述されているんだけど、three.js側は.mtlファイル名が必要っぽい。調べてないから詳しくはわからないけど。ここはブラウザでエラーも出ないのできづきにくい。