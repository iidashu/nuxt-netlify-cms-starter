---
title: React-Native( Expo )を使って作るアプリ開発の導入方法
author: tkut
date: 2018-07-05T09:39:57+00:00
slug: react-native-expo
published: true
categories:
  - 技術
tags:
  - react native

---
### アプリのインストール

まず初めに、Expoを使うのでスマホにExpoの[公式アプリ][1]をインストールする。  
インストールしてアプリを起動すると、アカウントを作るように言われるのでアカウントを作成する。

### アプリのひな型を作成

作成したら次に、コンソールでnpmを使ってcreate-react-native-appをインストールする。

`$ > npm i -g create-react-native-app` 

次に任意のフォルダーに入って、react-nativeのひな型を作成

```
$ > cd 任意のフォルダー
$ > create-react-native-app 任意のプロジェクト名
```

typescriptを使う場合は、以下を実行

```
$ > cd 任意のフォルダー
$ > create-react-native-app 任意のプロジェクト名 --scripts-version=react-native-scripts-ts
```


### アプリを実行

上記で、ひな型を作成したら作成されたフォルダーに入って npm start をする。  
すると**コンソール上**に**QRコード**が出てくるので、それをスマホのカメラを使ってスキャンする。

```
$ > cd 任意のプロジェクト名
$ > npm start
/*
* ここのQRコードをスマホのカメラを使ってスキャンする
*/
```


QRコードをスキャンするとさっきインストールしたExpoのアプリが起動するので、そこでcreate-react-native-appで作成されたアプリを実行することができる。

### デバッグ方法

デバッグなどは、スマホを振ると管理画面が出てくるので一番下にある**Debug Remote JS**をクリックするとPC側でブラウザが起動するのでそこでデバッグすることができる。

### 設定や便利なnpmモジュール

#### vsCode

[React Native Tools][2]

#### npmモジュール

  * **絵を描けるようになるモジュール**  
    [rn-draw][3]</p> 
    **expo版**  
    [rn-expo-draw][4] </li> 
    
      * **キーボード入力の時入力画面が隠れないようにするモジュール**  
        [react-native-keyboard-spacer][5] </ul>

 [1]: https://itunes.apple.com/app/apple-store/id982107779?mt=8
 [2]: https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native
 [3]: https://www.npmjs.com/package/rn-draw
 [4]: https://www.npmjs.com/package/rn-expo-draw
 [5]: https://www.npmjs.com/package/react-native-keyboard-spacer