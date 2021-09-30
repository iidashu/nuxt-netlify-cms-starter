---
title: Unity StreamingAssetsからファイルを読み出す
author: david
date: 2017-01-09T17:07:54+00:00
slug: unity-streamingassets
published: true
categories:
  - 技術
tags:
  - unity
  - 備忘録

---
Streaming Assets で iOSとAndroidの違いにハマったのでメモ。

```
string FilePath;
#if UNITY_IPHONE
  FilePath = Application.dataPath + "/Raw/" + filename;
#else
  string fullPath = "jar:file://" + Application.dataPath + "/!/assets/" + filename;
  WWW www = new WWW (fullPath);
    while (!www.isDone) {
  }
  FilePath = Application.persistentDataPath + filename;
  File.WriteAllBytes (toPath,www.bytes);
#endif
```

iOSはそのままパスからファイル読み込みできるけど、Androidは一度Application.persistentDataPathにコピーしてから開かないといけない。