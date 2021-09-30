---
title: Google API OAuth 2.0 の認証でハマった
author: david
date: 2016-12-28T08:19:18+00:00
slug: google-api-oauth-2
published: true
categories:
  - 技術
tags:
  - Firebase
  - web

---
```
<script type="text/javascript">

var client_id = "クライアントID";
var scopes = 'https://www.googleapis.com/auth/drive';

function checkAuth() {
	gapi.auth.authorize(
	{
	    'client_id':client_id,
	    'scope':scopes,
	    'immediate':true
	},
	function(authResult){
		console.log(arguments);
	}); 
}
</script>
<script type="text/javascript" src="https://apis.google.com/js/client.js?onload=checkAuth"</script>
```

こんな感じで認証部分を記述しても何度やってもこのエラーが。。

{{< figure class="alignnone size-full wp-image-279" src="/images/uploads/8e4c5284cf46eba7d34f0131740e304f.png" alt="" width="460" height="227" >}}

これ位のコードだとGoogle APIの設定を疑うくらいしかないのだが、Google のdeveloper consoleとかapiとかは膨大すぎてカオスで無駄に時間を取られた。

最終的には、API Managerの中の認証情報から、0Auth 2.0 クライアント IDのwebclientのところをクリック

{{< figure class="alignnone size-full wp-image-280" src="/images/uploads/1fc24dd826469bd3a1d78a7a42af8bff.png" alt="" width="527" height="732" >}}

制限事項のURLにローカルの8888ポートを指定していないということでした。。

{{< figure class="alignnone size-full wp-image-281" src="/images/uploads/e83a75b8c3cc5a241f2f20ae60a667d3.png" alt="" width="937" height="693" >}}

&nbsp;

これに気づくまで数時間も時間を無駄にしてしまいました。。

 [1]: http://backham.me/blog/wp-content/uploads/2016/12/8e4c5284cf46eba7d34f0131740e304f.png
 [2]: http://backham.me/blog/wp-content/uploads/2016/12/1fc24dd826469bd3a1d78a7a42af8bff.png
 [3]: http://backham.me/blog/wp-content/uploads/2016/12/e83a75b8c3cc5a241f2f20ae60a667d3.png