/**
 * 集中管理所有的状态变更事件
 * 用全部大写命名 mutation 是一个惯例，方便将它和 actions 区分开。
 *
 * Mutations 本质上是一个事件系统：每个 mutation 都有一个 事件名 (name) 和 一个 回调函数 (handler).
 * 任何一个 Mutation handler 的第一个参数永远为所属 store 的整个 state 对象
 */

export const REQUEST_POSTS_LIST = 'REQUEST_POSTS_LIST'
export const GET_POSTS_LIST = 'GET_POSTS_LIST'
export const GET_POSTS_LIST_FAILURE = 'GET_POSTS_LIST_FAILURE'

export const UPDATE_HEADLINE = 'UPDATE_HEADLINE'
export const GET_HEADLINE = 'GET_HEADLINE'

export const GET_POST = 'GET_POST'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'
export const CLEAR_POST = 'CLEAR_ARTIVLE'

export const GET_TAGS = 'GET_TAGS'
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE'

export const GET_TAG_POSTS_LIST = 'GET_TAG_POSTS_LIST'
export const GET_TAG_POSTS_LIST_FAILURE = 'GET_TAG_POSTS_LIST_FAILURE'

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT'
export const SUBMIT_COMMENT_FAILURE = 'SUBMIT_COMMENT_FAILURE'
