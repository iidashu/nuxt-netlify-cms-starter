---
title: Firebase Hostingに Google Domains でサブドメインを設定する
author: david
date: 2018-05-01T12:03:08+00:00
slug: firebase-hosting-google-domains
published: true
categories:
  - 技術
tags:
  - Firebase
  - google domains

---
ここからFirebase  
1. Firebase の　Hostingにもろもろデプロイする  
2. Firebaseコンソールに入って、Hostingを選択  
3. ドメイン　> ドメインを接続  
4. 設定しようと思っているサブドメインを入力(sub.mydomain.com)、「次へ」をクリック  
5. Aレコードタイプが２つ表示される

ここからGoogle Domains  
6.mydomain.comのDNSを選択  
7.カスタム リソース レコードの@にsubを入力  
8.カスタム リソース レコードのIPv4アドレスに、先ほどのFirebaseのAレコードタイプの1つ目のIPアドレスを入力  
9.次に入力したIPアドレスの右にある「＋」をクリックして入力枠を追加  
10. 追加された入力枠に2つ目のIPアドレスを入力

ここからまたFirebase  
11. ドメイン接続画面の「終了」をクリック  
12. Hostingに戻ると、ドメイン欄のsub.mydomain.comのステータスが保留中に変更してあれば完了