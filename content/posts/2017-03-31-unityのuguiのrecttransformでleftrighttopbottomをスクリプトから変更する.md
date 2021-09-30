---
title: UnityのUGUIのRectTransformでleft,right,top,bottomをスクリプトから変更する
author: david
date: 2017-03-31T03:38:06+00:00
slug: unity-ugui-recttransform
published: true
categories:
  - 技術
tags:
  - unity

---
```
gameObject.GetComponent<RectTransform> ().offsetMin = new Vector2 (left,bottom);

gameObject.GetComponent<RectTransform> ().offsetMax = new Vector2 (right,top);

```