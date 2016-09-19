import Vue from 'vue'
import Vuex from 'vuex'
import postsList from './modules/postsList'
import headline from './modules/headline'
import post from './modules/post'
import tags from './modules/tags'
import tagPostsList from './modules/tagPostsList'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    postsList: postsList,
    headline: headline,
    post: post,
    tags: tags,
    tagPostsList: tagPostsList
  }
})
