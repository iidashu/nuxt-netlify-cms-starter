---
title: Unity Listからforeachを使ってremoveする
author: david
date: 2017-01-19T09:27:42+00:00
slug: unity-list-foreach-remove
published: true
categories:
  - 技術
tags:
  - unity

---
```
foreach(Class item in Lists){
 if(item.id == id){ 
  Lists.remove(item);
 }
}
```

こんなかんじでやると、

InvalidOperationException: Collection was modified; enumeration operation may not execute.

とエラーになるので、

```
List<Class> TmpList = Lists;
foreach(Class item in Lists){
 TmpList.Add(item );
}

foreach(Class item in TmpList){
 if(item.id == id){ 
  Lists.remove(item);
 }
}
```

こうしてやる