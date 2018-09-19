/*
redux最核心的管理对象
 */
import {createStore, applyMiddleware} from 'redux'     /*后面应用中间件函数*/
import thunk from 'redux-thunk'    /*中间件*/
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers' // reducers整合多个reducer是一个reducer函数

// 向外默认暴露store对象
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))