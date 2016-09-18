import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

// 注册路由
let routerOptions = {
  history: true,
  hashbang: false
}
const router = new VueRouter(routerOptions)

FastClick.attach(window.document.body)

// 判定路由规则
router.map({
  '/home': {
    component: function(resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/about': {
    component: function(resolve) {
      require(['./components/About'], resolve)
    }
  },
  '/tags': {
    component: function(resolve) {
      require(['./components/Tags'], resolve)
    }
  },
  '/post/:category/:id': {
    name: 'post',
    component: function(resolve) {
      require(['./components/Post'], resolve)
    }
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app');
