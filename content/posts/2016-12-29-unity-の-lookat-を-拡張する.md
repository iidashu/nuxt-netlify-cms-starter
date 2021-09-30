---
title: Unity の lookAt を おきかえる
author: david
date: 2016-12-29T08:00:51+00:00
slug: unity-lookat
published: true
categories:
  - 技術
tags:
  - unity

---
UnityのlookAtは便利ですが、回転をさらに細かく制御しようと思うと難しいので置き換えます。

`Rot.transform.LookAt (Vector3.zero);` 

こうするところを、

```
Vector3 relative = gameObject.transform.InverseTransformPoint(Vector3.zero);<br />
float angle = Mathf.Atan2(relative.x, relative.z) * Mathf.Rad2Deg;<br />
Rot.transform.localRotation = Quaternion.Euler(0,angle - 90.0f, 0);
``` 

こうしてあげると、Vector3.zeroをむきつつ90.0度Y軸回転をできます