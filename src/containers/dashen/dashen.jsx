import React,{Component}from'react'
import {connect}from 'react-redux'
import {getUserList} from '../../redux/actions'

import UserList from '../../componnets/user-list/user-list'


// 大神的主界面路由组件
class Dashen extends Component {
  componentDidMount () {
    this.prpos.getUserlist('laoban')
  }
render () {
    return (
     < UserList userList = {this.props.userList}/>
    )
}

}


ReactDOM.render(, document.getElementById('example'))
