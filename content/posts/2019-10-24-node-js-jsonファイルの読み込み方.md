---
title: Node.js jsonファイルの読み込み方
author: david
date: 2019-10-23T17:48:53+00:00
slug: node-js-json
published: true
categories:
  - 技術
tags:
  - node

---
node.jsでjsonファイルの読み込む方法を２つメモ

## 1.直接requireで読み込み

` 
const json = require('../hoge.json');`  
この方法だと初回に１度読み込むだけなので、頻繁にjsonを書き換える場合は更新が反映されない。定数や設定ファイルに向いてる。

## 2.fsで読み込む

`` 
let json = JSON.parse(<br />
fs.readFileSync(`${full_path}/hoge.json`, 'utf8')<br />
);<br />
``  
この方法で関数の中で都度読み込んであげると、頻繁に書き込むするjsonも反映される

## 3.requestモジュールを使う

外部のサーバからGETでjsonを取ってくるときとかに使います。  
yarn add request でモジュールを追加  
` 
const request = require("request");<br />
request.get(<br />
   {<br />
      url:'https://xxx.com/api',<br />
      qs: {<br />
        key:'12345'<br />
      }<br />
    },<br />
    (error, response, body) => {<br />
      console.log(body);<br />
    }<br />
  );<br />
`