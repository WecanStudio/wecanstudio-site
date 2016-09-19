import * as types from './mutation-types'
import {API_ROOT} from '../config'

export const getPostsList = function ({dispatch}) {
  dispatch(types.REQUEST_POSTS_LIST)
  this.$http.get(`${API_ROOT}api/post/normal`).then(response => {
    dispatch(types.GET_POSTS_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_POST_FAILURE, error)
  })
}

//  获取标题, 更新标题
export const getHeadline = ({dispatch}) => {
  dispatch(types.GET_HEADLINE)
}
export const updateHeadline = ({dispatch}, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}

//  获取文章内容, 清除文章
export const getPost = function ({dispatch}, title) {
  this.$http.get(`${API_ROOT}api/post/normal/${title}`).then(response => {
    dispatch(types.GET_POST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_POST_FAILURE, error)
  })
}

export const clearPost = function ({dispatch}) {
  dispatch(types.CLEAR_POST)
}

// 获取标签集, 获取指定标签列表
export const getTags = function ({dispatch}) {
  this.$http.get(API_ROOT + 'api/tags').then(response => {
    dispatch(types.GET_TAGS, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_TAGS_FAILURE, error)
  })
}
export const getTagContentList = function ({dispatch}, tagId) {
  this.$http.get(API_ROOT + 'api/tags/' + tagId).then(response => {
    dispatch(types.GET_TAG_CONTENT_LIST, JSON.parse(response.body), tagId)
  }, error => {
    dispatch(types.GET_TAG_CONTENT_LIST_FAILURE, error)
  })
}

// 提交评论
export const submitComment = function ({dispatch}, data) {
  this.$http.post(`${API_ROOT}api/submitComment`, data).then(response => {
    dispatch(types.SUBMIT_COMMENT, JSON.parse(response.body), error => {
      dispatch(types.SUBMIT_COMMENT_FAILURE, error)
    })
  })
}
