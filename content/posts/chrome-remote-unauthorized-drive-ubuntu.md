---
title: "Ubuntuで外付けドライブが操作できなくなったらchrome remote desktopが怪しい"
date: 2020-12-01T12:25:33+09:00
description: "not authorized to perform operation が出たらchrome-remote-desktopを止めてからマウントする"
slug: "chrome-remote-unauthorized-drive-ubuntu"
published: true
tags: ["chrome remote desktop", "ubuntu"]
cover_image: /images/uploads/not_authorized.png
categories: ["技術"]
---
リモートワークが増えてchrome remote desktopの利用頻度も上がってる今日このごろですが、ubuntuにつないでいた外付けメディアが急に操作できなくなったりしませんか？

先程OSを再起動したらメディアを認識しなくなりました。取り出しもできず、ケーブル抜いたり刺したりするのですが、中身を見ようとしても以下の not authorized to perform operation のダイアログが出ます。

{{< figure src="/images/not_authorized.png" alt="not authorized" >}}

[こちら](https://itectec.com/ubuntu/ubuntu-mount-flashdrive-not-authorized-to-perform-operation/)に書かれていたとおり、chrome remote desktop を一旦止めてからマウント。マウントされたら再度起動。

`/opt/google/chrome-remote-desktop/chrome-remote-desktop --stop`

マウント、アンマウントなどをする

`/opt/google/chrome-remote-desktop/chrome-remote-desktop --start`

メディアを使えるようになりました。