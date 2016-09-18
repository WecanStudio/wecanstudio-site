import {
  REQUEST_POSTS_LIST,
  GET_POSTS_LIST,
  GET_POSTS_LIST_FAILURE
} from '../mutations'

const state = {
  // 是否正在请求
  isFetching: false,
  // 请求到的列表
  postsList: []
}

const mutations = {
  // 更新正在请求的状态
  [REQUEST_POSTS_LIST](state) {
    state.isFetching = true
  },
  // 请求完毕，获取到列表，更新
  [GET_POSTS_LIST](state, items) {
    state.isFetching = false
    state.postList = items
  },
  // 请求失败
  [GET_POSTS_LIST_FAILURE](state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
