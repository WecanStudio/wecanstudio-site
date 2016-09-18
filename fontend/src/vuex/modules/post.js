import {
  GET_POST,
  GET_POST_FAILURE,
  CLEAR_POST
} from '../mutations'

const state = {
  content: '',
  title: ''
}

const mutations = {
  [GET_POST](state, data) {
    state.content = data.content
    state.title = data.title
  },
  [GET_POST_FAILURE](state) {
    return state
  },
  [CLEAR_POST](state) {
    state.content = ''
    state.title = ''
  }
}

export default {
  state,
  mutations
}
