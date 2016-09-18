import Vue from 'vue'
import Vuex from 'vuex'
import postList from './modules/postsList'
import headline from './modules/headline'
import post from './modules/post'
import tags from './modules/tags'
import tagPostList from './modules/tagPostsList'

let debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug
Vue.use(Vuex)

export default new Vuex.Store({
  strict: debug,
  modules: {
    postList: postList,
    headline,
    post,
    tags,
    tagPostList,
  }
})
