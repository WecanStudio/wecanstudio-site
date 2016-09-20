import * as types from './mutation-types'
import {API_ROOT} from '../config'

export const getPostsList = function ({dispatch}) {
  dispatch(types.REQUEST_POSTS_LIST)
  this.$http.get(`${API_ROOT}api/post/normal`).then(function (response) {
    dispatch(types.GET_POSTS_LIST, JSON.parse(response.body))
  }, function (error) {
    dispatch(types.GET_POST_FAILURE, error)
  })
}

export const getHeadline = ({dispatch}) => {
  dispatch(types.GET_HEADLINE)
}

export const updateHeadline = ({dispatch}, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}

export const getPost = function ({dispatch}, title) {
  this
    .$http
    .get(`${API_ROOT}api/post/normal/${title}`)
    .then(function (response) {
      dispatch(types.GET_POST, JSON.parse(response.body))
    }, function (error) {
      dispatch(types.GET_POST_FAILURE, error)
    })
}

export const clearPost = function ({dispatch}) {
  dispatch(types.CLEAR_POST)
}

// 获取标签集, 获取指定标签列表
export const getTags = function ({dispatch}) {
  this
    .$http
    .get(API_ROOT + 'api/tags')
    .then(function (response) {
      dispatch(types.GET_TAGS, JSON.parse(response.body))
    }, error => {
      dispatch(types.GET_TAGS_FAILURE, error)
    })
}

export const getTagPostsList = function ({dispatch}, tag) {
  this
    .$http
    .get(`${API_ROOT}api/tags/${tag}`)
    .then(function (response) {
      dispatch(types.GET_TAG_POSTS_LIST, JSON.parse(response.body), tag)
    }, function (error) {
      dispatch(types.GET_TAG_POSTS_LIST_FAILURE, error)
    })
}

// 提交评论
export const submitComment = function ({dispatch}, data) {
  this
    .$http
    .post(`${API_ROOT}api/submitComment`, data)
    .then(function (response) {
      dispatch(types.SUBMIT_COMMENT, JSON.parse(response.body), error => {
        dispatch(types.SUBMIT_COMMENT_FAILURE, error)
      })
    })
}

// 提交评论
export const submitResume = function ({dispatch}, data) {
  this
    .$http
    .post(`${API_ROOT}api/submitResume`, data)
    .then(function (response) {
      dispatch(types.SUBMIT_RESUME, JSON.parse(response.body), error => {
        dispatch(types.SUBMIT_RESUME_FAILURE, error)
      })
    })
}

export const submitPost = function ({dispatch}, data) {
  this
    .$http
    .post(`${API_ROOT}api/submitPost`, data)
    .then(function (response) {
      dispatch(types.SUBMIT_POST, JSON.parse(response.body), error => {
        dispatch(types.SUBMIT_POST_FAILURE, error)
      })
    })
}
