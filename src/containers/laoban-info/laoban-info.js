import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {NavBar, InputItem, TextareaItem, Button, WingBlank, List, WhiteSpace} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

// import  HeaderSelector from '../../componnets/header-selector/header-selector'
import {updateUser} from '../../redux/actions'

// 主界面路由组件
export default class Main extends Component {

  render() {
    // 判断用户是否登陆(cookie中是否有user_id)，如果没有自动登陆到跳转页面
 const  userid =Cookids.get('userid')
 if (!userid){
   return <Redirect to={'/login'}/>
 }


    return(
      <div>
        <Switch>
          <Route path='/laobaninfo' component={LalbanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
        </Switch>
      </div>
    )
  }


}