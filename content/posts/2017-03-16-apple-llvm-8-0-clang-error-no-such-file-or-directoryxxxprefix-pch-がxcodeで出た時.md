---
title: 'Apple LLVM 8.0 clang: error: no such file or directory:xxx/Prefix.pch がxcodeで出た時'
author: david
date: 2017-03-16T10:35:30+00:00
slug: apple-llvm-8-0-clang-error-no-such-file-or-directoryxxxprefix-pch
published: true
categories:
  - 技術
tags:
  - unity
  - xcode
  - 備忘録

---
`Apple LLVM 8.0 clang: error: no such file or directory:xxx/Prefix.pch` 

Unityでビルドするとたまに出る。Build settingのPrefix Headerを見るとClasses/Prefix.pchとなってるけど、実際には存在しないので、そういう時は他のUnityでビルドしたプロジェクトからコピペして対処すればOK