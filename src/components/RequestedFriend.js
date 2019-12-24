import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import './RequestedFriend.css'

export default class RequestedFriend extends Component {
  render() {
    return (
      <Row className="friendList">
        <Col span={7}>
          <img src="Bingbing.jpg" alt="" width="79px" className="friendsPic" />
        </Col>
        <Col span={17} className="friendTextAndButtons">
          <Row>
            <span className="friendTitle">Fan Bingbing</span>
          </Row>
          <Row>
            <span className="mutualFriends">9 mutual friends</span>
          </Row>
          <Row>
            <Button size={"small"} className="confirmDeleteButtons">Confirm</Button>
            <Button size={"small"} className="confirmDeleteButtons">Delete</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
