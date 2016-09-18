import {
  GET_TAG_POSTS_LIST,
  GET_TAG_POSTS_LIST_FAILURE
} from '../mutations'

const state = {
  tagPostsList: [],
  tag: ''
}

const mutations = {
  [GET_TAG_POSTS_LIST](state, response, tag) {
    state.tagContentList = response
    state.tagId = tag
  },
  [GET_TAG_POSTS_LIST_FAILURE](state) {
    return state
  }
}

export default {
  state,
  mutations
}
