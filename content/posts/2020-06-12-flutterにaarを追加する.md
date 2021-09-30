---
title: Flutterにaarを追加する
author: david
date: 2020-06-12T02:29:17+00:00
published: true
slug: "816"
categories:
  - 技術
tags:
  - android
  - flutter

---
1 ) Androidディレクトリにlibsディレクトリを作成して.aarを入れる  
2 ) Androidディレクトリ直下のbuild.gradleを編集  
` 
dependencies {<br />
&nbsp;&nbsp;compile files('libs/xxxxx.aar')<br />
}<br />
repositories {<br />
&nbsp;&nbsp;google()<br />
&nbsp;&nbsp;jcenter()<br />
&nbsp;&nbsp;flatDir dirs: './libs'<br />
}<br />
allprojects {<br />
&nbsp;&nbsp;repositories {<br />
&nbsp;&nbsp;&nbsp;google()<br />
&nbsp;&nbsp;&nbsp;jcenter()<br />
&nbsp;&nbsp;&nbsp;flatDir dirs: './libs'<br />
&nbsp;&nbsp;&nbsp;flatDir dirs: './libs'<br />
&nbsp;&nbsp;}<br />
}` 

3 ) Androidディレクトリ直下のsettings.gradle にライブラリ追加  
` 
include ':app',':xxxxx'<br />
`