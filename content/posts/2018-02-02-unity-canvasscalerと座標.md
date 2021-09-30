---
title: '[Unity] CanvasScalerと座標'
author: david
date: 2018-02-02T00:44:51+00:00
slug: unity-canvasscaler
published: true
categories:
  - 技術
tags:
  - unity

---
uGUIやRectTransformを使った画面のレイアウトをスクリプトから制御しようと思うと、座標の扱い方で混乱することがあるのでメモ。

mousePositionやtouchesの座標 > 画面の解像度座標  
uGUI(RectTransform) > CanvasScaler内の座標

なので、座標の変換が必要