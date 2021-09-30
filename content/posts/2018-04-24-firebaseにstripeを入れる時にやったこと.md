---
title: FirebaseにStripeを入れる時にやったこと
author: tkut
date: 2018-04-24T01:00:44+00:00
published: false
slug: firebase-stripe
categories:
  - 技術
tags:
  - unity
  - firebase
  - stripe

---
1. npmでstripeをダウンロード  

```
cd tddb-frontend/functions
npm i --save stripe
``` 

2. stripeで月額請求をユーザーに設定

```
// stripeの顧客を作成する。
exports.createCustomer = functions.database.ref('users/{userId}/stripe').onWrite( event => {

let _stripe = event.after.val();

switch( _stripe.plan ){  
case &#8220;plus&#8221;:  
if( \_stripe.customer\_id ){ //顧客IDがあれば、

stripe.customers.create({  
email: &#8220;tkut1925@gmail.com&#8221;,  
source: &#8220;tok_1CJy1ZAXDRAeVbOmCRNwlWRd&#8221;  
},  
(err,customer) => {  
if( err ) throw err;

// 顧客情報とplanをつなぐ  
stripe.subscriptions.create({  
customer: customer.id,  
items:[  
{  
plan: &#8220;plan_CjPCxaUmtXj7Mj&#8221;,  
quantity: 1,  
},  
]  
},  
(_err,sub) => {  
if( \_err ) throw \_err;

console.log(&#8220;Success !!!&#8221;, sub);  
return sub;  
});

return customer;  
});  
}  
break;  
case &#8220;pro&#8221; :  
break;  
default :  
break;  
}

return _stripe;  
})
```

3. ここでダッシュボードで作ったユーザーだと請求元が設定されてないというエラーになるので、請求元を設定してあげる必要がある。

4. FirebaseFunctionsの使用が変わっていた。

[firebase functions ](https://firebase.google.com/docs/functions/beta-v1-diff#event_parameter_split_into_data_and_context)