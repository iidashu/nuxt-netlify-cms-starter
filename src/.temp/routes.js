const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/iida/Documents/p/backham.me/blog/my-gridsome-site/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/iida/Documents/p/backham.me/blog/my-gridsome-site/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/iida/Documents/p/backham.me/blog/my-gridsome-site/src/templates/Category.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/iida/Documents/p/backham.me/blog/my-gridsome-site/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/iida/Documents/p/backham.me/blog/my-gridsome-site/src/pages/Index.vue")

export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: c1
  },
  {
    path: "/tag/:id/",
    component: c2
  },
  {
    path: "/category/:id/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
