import {REQUEST_POSTS_LIST, GET_POSTS_LIST, GET_POSTS_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: false,
  postsList: []
}

const mutations = {
  [REQUEST_POSTS_LIST] (state) {
    state.isFetching = true
  },
  [GET_POSTS_LIST] (state, items) {
    state.isFetching = false
    state.postsList = items
  },
  [GET_POSTS_LIST_FAILURE] (state) {
    state.postsList = false
  }
}

export default {
  state,
  mutations
}
