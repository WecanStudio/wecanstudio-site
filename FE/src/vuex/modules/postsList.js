import {REQUEST_CONTENT_LIST, GET_CONTENT_LIST, GET_CONTENT_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: false,
  postsList: []
}

const mutations = {
  [REQUEST_CONTENT_LIST] (state) {
    state.isFetching = true
  },
  [GET_CONTENT_LIST] (state, items) {
    state.isFetching = false
    state.postsList = items
  },
  [GET_CONTENT_LIST_FAILURE] (state) {
    state.postsList = false
  }
}

export default {
  state,
  mutations
}
