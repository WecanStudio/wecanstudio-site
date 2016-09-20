import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueAnimatedList from 'vue-animated-list'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueAnimatedList)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

FastClick.attach(window.document.body)

// 路由map
router.map({
  '/home': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/about': {
    component: function (resolve) {
      require(['./components/About'], resolve)
    }
  },
  '/recruit': {
    component: function (resolve) {
      require(['./components/Recruit'], resolve)
    }
  },
  '/dispatch': {
    component: function (resolve) {
      require(['./components/Dispatch'], resolve)
    }
  },
  '/timeline': {
    component: function (resolve) {
      require(['./components/Timeline'], resolve)
    }
  },
  '/post/normal/:title': {
    name: 'post',
    component: function (resolve) {
      require(['./components/Post'], resolve)
    }
  }

})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
