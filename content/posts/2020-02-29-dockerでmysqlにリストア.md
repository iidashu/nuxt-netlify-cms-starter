---
title: dockerでmysqlにリストア
author: david
date: 2020-02-29T04:30:33+00:00
slug: docker-mysql-restore
published: true
categories:
  - 技術
tags:
  - docker
  - mysql

---
dockerコンテナにダンプファイルをコピー

``

`docker cp dump.sql コンテナ名:/tmp/dump.sql
`

コンテナに接続する

``

`docker exec -it コンテナ名 bash 
`

権限を変更

``

`chmod 400 ./tmp/dump.sql
`

リストア

``

`mysql -u root -proot -D テーブル名 &lt; ./tmp/dump.sql
`