---
title: react-map-glのMarker
author: tkut
date: 2017-12-14T01:43:29+00:00
slug: react-map-gl-marker
published: true
categories:
  - 技術
tags:
  - react

---
1.Markerをインポート

import { Marker } form &#8216;react-map-gl&#8217;;

2. 使い方

hoge(){

return data.map((element,i)=>{

const {info,coordinates} = element; //data情報を取得

return (

<Marker key={i}

longitude= {coordinates[0]}

latitude={coordinates[1]}

>

<div><span>{info}</span></div>

</Marker>

);

});

}