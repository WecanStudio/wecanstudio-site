import {SUBMIT_RESUME, SUBMIT_RESUME_FAILURE} from '../mutation-types'

const state = {}

const mutations = {
  [SUBMIT_RESUME] (state, data) {
    window.alert('提交成功')
  },
  [SUBMIT_RESUME_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
