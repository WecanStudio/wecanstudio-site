/**
 * 这里定义了一系列的动作
 * action 是一种专门用来被 component 调用的函数。
 *
 * action 函数能够通过分发相应的 mutation 函数，来触发对 store 的更新。
 * action 也可以先从 HTTP 后端或 store 中读取其他数据之后再分发更新事件。

 * Actions 是用于分发 mutations 的函数。
 * 按照惯例，Vuex actions 的第一个参数是 store 实例，附加上可选的自定义参数。
 */

import * as types from './mutations';
import API_ROOT from '../config';

// 获取该分类下所有的文章
export const getAllPosts = function({
  dispatch
}, category) {
  // 分发一个状态更新
  dispatch(types.REQUEST_CONTENT_LIST);
  // 进行 HTTP 请求，然后根据不同的请求结果进行不同的状态更新
  this
    .$http.get(`${API_ROOT}api/post/${category}`)
    .then(response => {
      dispatch(types.GET_CONTENT_LIST, JSON.parse(response.body));
    }, error => {
      dispatch(types.GET_CONTENT_LIST_FAILURE, error);
    })
};

// 获取标题
export const getHeadline = ({
  dispatch
}) => {
  dispatch(types.GET_HEADLINE)
};

// 更新标题
export const updateHeadline = ({
  dispatch
}, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
};

//  获取文章内容
export const getPost = function({
  dispatch
}, category, title) {
  this
    .$http
    .get(`${API_ROOT}api/post/${category}/${title}`)
    .then(response => {
      dispatch(types.GET_ARTICLE, JSON.parse(response.body))
    }, error => {
      dispatch(types.GET_ARTICLE_FAILURE, error)
    })
};

// 清除文章
export const clearPost = function({
  dispatch
}) {
  dispatch(types.CLEAR_ARTICLE)
};

// 获取标签集
export const getAvaliableTags = function({
  dispatch
}) {
  this
    .$http
    .get(`${API_ROOT}api/tags`)
    .then(response => {
      dispatch(types.GET_TAGS, JSON.parse(response.body))
    }, error => {
      dispatch(types.GET_TAGS_FAILURE, error)
    })
};

// 获取指定标签列表
export const getPostByTag = function({
  dispatch
}, tag) {
  this
    .$http
    .get(`${API_ROOT}api/tag/${tag}`)
    .then(response => {
      dispatch(types.GET_TAG_CONTENT_LIST, JSON.parse(response.body), tagId)
    }, error => {
      dispatch(types.GET_TAG_CONTENT_LIST_FAILURE, error)
    })
};

// 提交评论
export const submitComment = function({
  dispatch
}, content) {
  this
    .$http
    .post(`${API_ROOT}api/comments/submitComment`, content)
    .then(response => {
      dispatch(types.SUBMIT_COMMENT, JSON.parse(response.body), error => {
        dispatch(types.SUBMIT_COMMENT_FAILURE, error)
      })
    })
};
