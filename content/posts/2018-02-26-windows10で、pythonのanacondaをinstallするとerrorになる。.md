---
title: Windows10で、PythonのAnacondaをinstallするとErrorになる。
author: tkut
date: 2018-02-26T10:59:42+00:00
slug: windows10-python-anaconda
published: true
categories:
  - 技術
tags:
  - python
  - anaconda
  - windows

---
windows10で、pythonのAnacondaをinstallするときエラーが発生したのでその解決方法をメモ。

解決方法 : installする時のpathが長すぎたためにエラーになっていた。pathを、C://Program~/Anaconda3 から、C://Anaconda3 のようにすればエラーが無くなった。