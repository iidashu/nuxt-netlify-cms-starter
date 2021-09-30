---
title: three.jsに.objを読み込む時のメモ
author: david
date: 2017-03-31T09:55:56+00:00
slug: three-js-obj
published: true
categories:
  - 技術
tags:
  - webgl
  - three.js

---
usemtl .mtlファイル名  
s off

にする。  
usemtlの名前が3Dソフトでつけてるマテリアル名になっていることがあるので、それをjs側で読み込む.mtl名に変えること。