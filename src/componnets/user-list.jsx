import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'


const Header = Card.Header
const Body =Card.Body

// 用户列表组件
export default class UserList extends Component {

 static propTypes ={
   userList: PropTypes.array.isRequired
 }

  render() {
    // 过滤得到完善了信息的user数组
    return(
      <WingBlank>
        {
          userList.map((user, index) => (
            <div key={user._id}>
              <WhiteSpace/>
              <Card>
                <Header
                  thumb={require(`../../assets/images/${user.header}.png`)}
                  extra={user.username}
                />
                <Body>
                {user.post ? <div>职位: {user.post}</div> : null}
                {user.company ?<div>公司: {user.company}</div> : null}
                {user.salary ? <div>月薪: {user.salary}</div> : null}
                {user.info ?<div>描述: {user.info}</div> : null}
                </Body>
              </Card>
            </div>
          ))
        }

      </WingBlank>
    )

  }
}


ReactDOM.render(, document.getElementById('example'))