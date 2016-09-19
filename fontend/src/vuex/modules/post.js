import {GET_POST, GET_POST_FAILURE, CLEAR_POST, SUBMIT_COMMENT, SUBMIT_COMMENT_FAILURE} from '../mutation-types'

const state = {
  time: '',
  content: '',
  title: '',
  comments: []
}

const mutations = {
  [GET_POST] (state, data) {
    state.content = data.content
    state.time = data.time
    state.title = data.title
    state.comments = data.comments
  },
  [GET_POST_FAILURE] (state) {
    return state
  },
  [CLEAR_POST] (state) {
    state.time = ''
    state.content = ''
    state.title = ''
    state.comments = []
  },
  [SUBMIT_COMMENT] (state, data) {
    state.comments.push(data)
  },
  [SUBMIT_COMMENT_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
