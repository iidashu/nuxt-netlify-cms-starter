---
title: React native の Android release build で起動しても落ちる時の解決法
author: sintaro
date: 2018-09-25T08:42:33+00:00
slug: react-native-android-release-build
published: true
categories:
  - 技術
tags:
  - android
  - react
  - react native

---
React nativeをandroid向けにRelease buildして署名済みapkを生成する方法は基本的に[公式ドキュメント][1]に書いてあるようにすればいいが、そのままやっても起動後すぐに落ちるようになってしまった。結果的には、jsファイルがうまくbundleされてなかったらしいので、自分でやる。

公式ドキュメント中の[Generating the release APK][2]で ./gradlew assembleRelease を実行した直後のタイミングで、プロジェクト直下で react-native bundle &#8211;platform android &#8211;dev false &#8211;entry-file index.js &#8211;bundle-output android/app/src/main/assets/index.android.bundle &#8211;assets-dest android/app/src/main/res/ を実行する。この時、./gradlew assembleReleaseを実行する前にbundleしてはいけない。必ず後にやる。

その後 react-native run-android &#8211;variant=release で実機にデプロイしテストするが、このとき入れてるnodeモジュールによってはエラーが出る。エラーメッセージが Error: Duplicate resources なら、このメッセージの直前に出力されるファイルパスの該当ファイルをすべて削除すれば動くはず。

 [1]: https://facebook.github.io/react-native/docs/signed-apk-android
 [2]: https://facebook.github.io/react-native/docs/signed-apk-android#generating-the-release-apk