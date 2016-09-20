import {SUBMIT_POST, SUBMIT_POST_FAILURE} from '../mutation-types'

const state = {}

const mutations = {
  [SUBMIT_POST] (state, data) {
    if (data.code === 0) {
      window.alert('发文成功')
      return
    }
    window.alert('发文失败')
  },
  [SUBMIT_POST_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
