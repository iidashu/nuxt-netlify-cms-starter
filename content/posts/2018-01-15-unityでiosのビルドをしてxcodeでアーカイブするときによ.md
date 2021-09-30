---
title: UnityでiOSのビルドをしてxcodeでアーカイブするときによくでるエラー
author: david
date: 2018-01-15T04:52:01+00:00
slug: unity-ios-xcode
published: true
categories:
  - 技術
tags:
  - unity
  - xcode

---
**その１**  

`.......MapFileParser.sh: Permission denied`

まんまパーミッションを変更する  

`chmod +x MapFileParser.sh</span>`

**その2**  

```
clang: error: no such file or directory: '......../Classes/Prefix.pch'
clang: error: no input files
```

どこか別のxcodeプロジェクトから同じファイルをコピペしてもってくる

あせることはない、コピペでいいんだぜ