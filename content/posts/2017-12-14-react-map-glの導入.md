---
title: react-map-glの導入
author: tkut
date: 2017-12-14T01:32:06+00:00
slug: react-map-gl
published: true
categories:
  - 技術
tags:
  - react

---
1.react-map-glをインストール  
`npm i --save react-map-gl`

2.react内で使う  
import React from &#8216;react&#8217;;  
import ReactDOM from &#8216;react-dom&#8217;;  
import ReactMapGL from &#8216;react-map-gl&#8217;;

class Map extends React.Component{  
constructor(props){  
super(props);

this.state = {  
viewport:{  
width :400,  
height :400,  
latitude :37.7577,  
longitude :-122.4376,  
zoom :8  
}  
};  
}

render(){  
const {viewport} = this.state;  
return (

<ReactMapGL

mapStyle=&#8221;mapbox:~~~&#8221;

{&#8230;viewport}

onViewportChange={

viewport => this.setState(viewport);

}

>

</ReactMapGL>

);

}

3.webpackに以下を追加

process.env[&#8216;MapboxAccessToken&#8217;]= &#8220;~~~~&#8221;;

以下略&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;>>

plugins:[

new webpack.EnviromentPlugin([&#8216;MapboxAccessToken&#8217;])

]

<<&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;以下略