---
title: Node.js 更新したデータを定期的にGitにバックアップする
author: david
date: 2019-12-10T05:47:32+00:00
slug: node-js-git-backup
published: true
categories:
  - 技術
tags:
  - git
  - node
  - web

---
お題

## cmsで作られた様々なjsonデータや画像データを毎日バックアップする

cmsをNode.jsで実装していたので、サクッとNode.jsだけで簡単に終わらせたい。検討した方法は２つ

  1. zipしてGoogle driveに保存
  2. gitにプッシュ

### 1.zipしてGoogle driveに保存

node.jsでzipできるarchiverを入れる

    yarn add archiver
    

    const archiver = require("archiver");
    const fs = require("fs");
    
    const date = new Date();
    //日付からファイル名を作成
    const file_name = `${date.getFullYear()}${date.getMonth()}${date.getDate()}.zip`;
    
    //ファイル
    const output = fs.createWriteStream(`./archives/${file_name}.zip`);
    
    //アーカイブ
    const archive = archiver("zip", {
        zlib: { level: 5 } //圧縮レベル
    });
    
    //完了のコールバック
    output.on("close", function() {
      var archive_size = archive.pointer();
      console.log(
        `complete! total size : ${archive_size} bytes(${config.upload_path})`
      );
    });
    
    //実行
    archive.pipe(output);
    archive.directory("./data", false);
    archive.glob(`./data/**/*`);
    archive.finalize();
    

ただこの後Google Driveにファイルを保存する方法を調べててちょっと面倒臭くなったのと、毎回丸ごと保存するのは容量食うし良くないなと、あとあまりサクッと感がないなと思って、この1番は却下。

## 2.gitにプッシュ

そもそもソースコードはbitbucketで管理しているので、新しいリポジトリ作ってそこに定期的にプッシュしていけば簡単なことに気づいた。保存されるのは差分だけだし、ロールバックも楽だし。

simple-gitを入れる

    yarn add simple-git

./dataディレクトリの中に新しいリポジトリを作成。サブツリーでもOKだけど、.gitignoreしているディレクトリに普通に作ってしまったので、そのまま。

    cd ./data
    git init
    git remote add origin xxx.git
    git pull origin master

nodeからgitの操作をできるsimple-gitを入れる

    yarn add simple-git

git\_commit\_and_push.js

    const simpleGit = require("simple-git")("./data");
    const git_commit_and_push = ()  =>{
      const date = new Date();
      const commit_log = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
      simpleGit
        .add("./")
        .commit(`${commit_log}`)
        .push("origin", "master");
    }
    export module = { git_commit_and_push }
    

これだけ

### node-cronとforeverで定期実行&永続化

永続化=forever、定期実行=node-cronを入れる

    yarn global add forever
    yarn add node-cron

commit_everyday.js

    const cron = require("node-cron");
    const { git_commit_and_push } from "./git_commit_and_push";
    //毎日4時にコミット
    cron.schedule("0 0 4 * * *", () => {
      git_commit_and_push();
    });

foreverで永続化

    forever start commit_everyday.js