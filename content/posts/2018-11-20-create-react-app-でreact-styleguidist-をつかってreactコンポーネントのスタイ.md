---
title: create-react-app でreact-styleguidist をつかってReactコンポーネントのスタイルガイドを作成する
author: david
date: 2018-11-20T03:59:05+00:00
slug: create-react-app-react-styleguidist
published: true
categories:
  - 技術
tags:
  - javascript
  - react

---
先日スタートアップカフェコザで行ったセッション（[コンポーネント指向UI開発で学ぶReact入門 沖縄フロントエンド塾 in スタートアップカフェコザ](https://connpass.com/event/107725/)）で紹介したReactコンポーネントのスタイルガイドの作成を記載します。  
ボタンのコンポーネントを作成してスタイルガイドで表示するまでの手順です。

## プロジェクトの作成

プロジェクトを作成

    create-react-app ui-react

ui-reactフォルダに移動  
styleguidistとnode-sassを入れます

    yarn add react-styleguidist

## package.json

scriptsに追記

    
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        <b>"styleguide": "styleguidist server"</b>//これを追加
      }
    

## ボタンのコンポーネントの作成

src/components/atoms/btn/  
でフォルダを作成して、

    
    Btn.jsx
    Btn.scss
    Btn.md
    

のファイルを作成

## ボタンのjsx作成

    
    import React from 'react';
    import './Btn.scss';
    export const Btn =(props)=>{
      return(
        <div 
          className='btn'
          onClick={(e)=>{this.props.handleClick(e)}}
        >
          {props.children}
        </div>
      )
    }
    

## ボタンのscss作成

    
    @mixin btn {
      border-radius:4px;
      padding:4px;
      font-sie:12px;
      text-align:center;
      &:hover {
        cursor:pointer;
        font-weight:bold;
      }
    }
    
    .btn {
      @include btn;
    }
    
    

## ボタンのmd作成

このファイルにスタイルガイドに表示するものを記述  
いろいろ設定できます([Documenting components](https://react-styleguidist.js.org/docs/documenting.html))

    
    ```jsx
    <Btn handleClick={}>.btn</Btn>
    ```
    

## スタイルガイド作成

    
    yarn styleguide
    

コンパイルすると、

    
    yarn run v1.7.0
    $ styleguidist server
    Loading webpack config from:
    D:\work\FrontendJ\react-styleguidist\node_modules\react-scripts\config\webpack.config.dev.js
    
    You can now view your style guide in the browser:
    
      Local:            http://localhost:6060/
      On your network:  http://172.24.138.209:6060/
    
     DONE  Compiled successfully!
    
    

&nbsp;  
&nbsp;

    
    http://localhost:6060/
    

このurlを開くと表示されます。  
&nbsp;  
&nbsp;  
{{< figure src="/images/uploads/08525d5e68a1716e1fad28389a32b0aa.png" alt="" width="818" height="551" class="alignnone size-full wp-image-648" srcset="http://blog.backham.me/blog/wp-content/uploads/2018/11/08525d5e68a1716e1fad28389a32b0aa.png 818w, http://blog.backham.me/blog/wp-content/uploads/2018/11/08525d5e68a1716e1fad28389a32b0aa-768x517.png 768w" sizes="(max-width: 818px) 100vw, 818px" >}}  
&nbsp;  
&nbsp;

## 気をつけること

  * 1つの.jsxに1つのコンポーネント