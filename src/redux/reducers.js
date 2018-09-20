/*
包含n个reducer函数的模块
reducer函数: 根据老的state和指定的action 生产新的state
 */        /*合并多个reducers*/
import {combineReducers} from 'redux'

import {getRedirectPath} from '../utils'

// 初始状态值
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from './action-types'


// 管理user数据
const initUser = {
  username: '', // 用户名
  type: '', // 用户类型
  msg: '', // 需要显示的错误信息
  redirectTo: '', // 需要自动重定向的路径
}
                   /*  形参默认值*/
function user (state=initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const user = action.data
      return {...user, redirectTo: getRedirectPath(user.type, user.header)}
    case ERROR_MSG:
      const msg = action.data
      return {...state, msg}
    case RECEIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state
  }
}



const initYyy = {}
function yyy (state=initYyy, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  user
})
// 状态是一个对象但他返回的是一个函数
/*
combineReducers()执行的结果是一个新的reducer函数
整合后的reducer管理的状态结构为:  对象: {xxx: xxx(), yyy: yyy()}
 */