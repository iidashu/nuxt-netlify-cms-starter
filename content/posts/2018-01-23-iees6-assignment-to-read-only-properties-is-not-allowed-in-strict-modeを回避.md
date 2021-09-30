---
title: '[IE][ES6] Assignment to read-only properties is not allowed in strict modeを回避'
author: david
date: 2018-01-23T08:50:11+00:00
slug: iees6-assignment-to-read-only-properties-is-not-allowed-in-strict-mode
published: true
categories:
  - 技術
tags:
  - ES6
  - javascript

---
ReactでUIを動的に変化させる実装をしていてEdge/IEで、

`Assignment to read-only properties is not allowed in strict mode`

とエラった。

これは、

```
const cell = findDOMNode(this.refs.cell);
let _rect = cell.getBoundingClientRect();
_rect.y += 10;
``` 

みたいに、DOMのRectがread-onlyのものに代入するとでるから、

```
let _rect = cell.getBoundingClientRect();
let _rect2 = $.extend(true,{},_rect);
_rect2.y += 10;
``` 

って感じでディープコピーしてやる