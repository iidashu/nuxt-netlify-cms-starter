---
title: react-map-glのPopup
author: tkut
date: 2017-12-14T01:49:39+00:00
slug: react-map-gl-popup
published: true
categories:
  - 技術
tags:
  - react

---
1.Popupをインポート

import {Popup} form &#8216;react-map-gl&#8217;;

2.使い方

hoge(){

return (

<Popup

tipSize={5} //座標を指すチップのサイズ。

anchor=&#8221;top&#8221; //座標に対するポップアップの位置を示す文字列。オプションは`top`、`bottom`、`left`、`right`、`top-left`、`top-right`、`bottom-left`、`bottom-right`。

longitude={~~~}

latitude={~~~}

onClose={function}

>

<div>{~~~~~}</div>

</Popup>

);

}