---
title: Unityのコード編集にVSCodeを使う
author: tkut
date: 2018-05-09T03:04:53+00:00
slug: unity-vscode
published: true
categories:
  - 技術
tags:
  - unity

---
VSCodeがとても使いやすくて、「UnityでもVSCodeつかえないかなぁ・・・」っと思っていたらやっている人いたので自分もやってみることにした。

参考記事  
[今日からUnity + Visual Studio Codeを用いた快適な開発生活(随時更新中)](https://qiita.com/4_mio_11/items/e7b0a5e65c89ac9d6d7f)

VSCodeでの設定

i. VSCodeの拡張機能から、以下のプラグインをインストールする。

  * [C#][1]
  * [Debugger for Unity][2]
  * あとお好みで、[Unity Code Snippets][3]

ii. VSCodeのデバッグアイコンから歯車をクリックしたら、Unity Debuggerを選択。

![操作説明][4] 

![Debugger選択][5] 

デバッグするときにUnity Editorを選択するとデバッグできる。

![Debug選択][6] 

iii. UnityからEdit -> Preference -> External Tools -> External Script Editor をVSCodeに変更。

iiii. 以上！

 [1]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp
 [2]: https://marketplace.visualstudio.com/items?itemName=Unity.unity-debug
 [3]: https://marketplace.visualstudio.com/items?itemName=kleber-swf.unity-code-snippets
 [4]: https://github.com/Unity-Technologies/vscode-unity-debug/raw/master/Screenshots/vscode-debug-view.png
 [5]: https://github.com/Unity-Technologies/vscode-unity-debug/raw/master/Screenshots/vscode-debugger-list.png
 [6]: https://github.com/Unity-Technologies/vscode-unity-debug/raw/master/Screenshots/vscode-debugger-unity.png