---
title: bitbucket Webhooksでvueプロジェクトのデプロイとビルドを自動化
author: david
date: 2019-12-18T08:13:16+00:00
slug: bitbucket-webhooks
published: true
categories:
  - 技術
tags:
  - git
  - bitbucket
  - webhooks
  - node
  - vue

---
## Webhooksを設定

Bitbucketリポジトリの

`Settings &gt; Webhooks 
`

に遷移

{{< figure class="alignnone size-full wp-image-751" src="/images/uploads/d6440acdd4691ed0ef0f2c555491c853.png" alt="" width="2348" height="1386" srcset="http://blog.backham.me/blog/wp-content/uploads/2019/12/d6440acdd4691ed0ef0f2c555491c853.png 2348w, http://blog.backham.me/blog/wp-content/uploads/2019/12/d6440acdd4691ed0ef0f2c555491c853-1024x604.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2019/12/d6440acdd4691ed0ef0f2c555491c853-768x453.png 768w, http://blog.backham.me/blog/wp-content/uploads/2019/12/d6440acdd4691ed0ef0f2c555491c853-1600x944.png 1600w" sizes="(max-width: 2348px) 100vw, 2348px" >}} 

Add webook をクリック

{{< figure class="alignnone size-full wp-image-752" src="/images/uploads/b1ab0b406884cbf586eac4e8f89d1951.png" alt="" width="1944" height="1364" srcset="http://blog.backham.me/blog/wp-content/uploads/2019/12/b1ab0b406884cbf586eac4e8f89d1951.png 1944w, http://blog.backham.me/blog/wp-content/uploads/2019/12/b1ab0b406884cbf586eac4e8f89d1951-1024x718.png 1024w, http://blog.backham.me/blog/wp-content/uploads/2019/12/b1ab0b406884cbf586eac4e8f89d1951-768x539.png 768w, http://blog.backham.me/blog/wp-content/uploads/2019/12/b1ab0b406884cbf586eac4e8f89d1951-1600x1123.png 1600w" sizes="(max-width: 1944px) 100vw, 1944px" >}} 

titleとリクエスト先URLを入力

Triggers  > Repository push にチェックが入っているのを確認。リポジトリプッシュがトリガーになって入力したURLにリクエストを送られる。

## Webhooksのリクエスト先を作成

webhooksのリクエスト先のdeploy.jsを作成  
&nbsp;  
webhooksがリクエストすると、任意のディレクトリ(vue-project)でmasterをプルしてきて、yarn buildを実行

    
    const http = require("http");
    const url = require("url");
    const util = require("util");
    const childProcess = require("child_process");
    const exec = util.promisify(childProcess.exec); //child_processをprmoise化
    
    const pullMaster = async () => {
      const cmd_pull = `cd ${__dirname}/vue-project && git checkout master && git pull origin master`;
      return await exec(cmd_pull, { timeout: 90000 }, (error, stdout, stderr) => {
        if (error !== null) {
          console.log("exec error: " + error);
        }
      });
    };
    
    const build = async () => {
      await exec(`cd ${__dirname}/vue-project && yarn build`);
    };
    
    const pullAndBuild = async () => {
      await pullMaster();
      await build();
    };
    
    http
      .createServer((req, res) => {
        if (
          req.method == "POST"
        ) {
          pullAndBuild();
        }
      })
      .listen(3000);