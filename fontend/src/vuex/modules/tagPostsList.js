import {GET_TAG_POSTS_LIST, GET_TAG_POSTS_LIST_FAILURE} from '../mutation-types'

const state = {
  tagPostsList: [],
  tag: ''
}

const mutations = {
  [GET_TAG_POSTS_LIST] (state, data, tagId) {
    state.tagPostsList = data
    state.tag = tagId
  },
  [GET_TAG_POSTS_LIST_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
