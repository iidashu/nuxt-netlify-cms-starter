---
title: '[Unity] AndroidでMeshFilterを生成するとFPSが下がる'
author: tkut
date: 2018-05-22T06:34:38+00:00
slug: unity-android-fps
published: true
categories:
  - 技術
tags:
  - unity

---
Unityで、MeshをPointで生成しようとして以下の処理をスクリプトに記述。  
Androidでビルドして実機確認したら、FPSが物凄く低下した。  

``` 
MeshFilter meshFilter = GetComponent();
meshFilter.mesh.SetIndices(meshFilter.mesh.GetIndices(0), MeshTopology.Points, 0);
```

上記の処理が無い時のFPSは60FPS前後であるのに対して、  
ある場合は、3FPSにまで低下した。

※原因がわかり次第記事にします。