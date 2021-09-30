---
title: HerokuでSendgridのアドオンを設定するのにハマったので備忘録
author: david
date: 2018-06-01T09:47:18+00:00
slug: heroku-sendgrid
published: true
categories:
  - 技術
tags:
  - heroku
  - sendgrid

---
  * SendGridのアドオンを追加するにはクレジットカード登録が必要
  * 環境変数のSENDGRID\_NAME、SENDGRID\_PASSWORDを先に設定しない
  * 先にSENDGRID\_API\_KEYを設定する

SendGridアドオン設定手順

  1. まずSendGridでAPIキーを作成、コピーする
  2. Heroku管理画面で、Settings > Config Vars で 環境設定のSENDGRID\_API\_KEYにさきほどコピーしたAPIキーを登録する
  3. Heroku管理画面で、Resources > Add-onsにSendgridを入力して一覧に表示された選択する
  4. Provisionのポップアップができるので、Provisionを押す
  5. 完了する

この時点でSENDGRID\_NAME、SENDGRID\_PASSWORDが設定されている