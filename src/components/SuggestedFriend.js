import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import './SuggestedFriend.css'

export default class SuggestedFriend extends Component {
  render() {
    return (
      <Row className="friendList">
        <Col span={7}>
          <img src="Nadech.jpg" alt="" width="79px" className="friendsPic" />
        </Col>
        <Col span={17} className="friendTextAndButtons">
          <Row>
            <span className="friendTitle">ณเดชน์ คุกกี้มั้ยจ๊ะ</span>
          </Row>
          <Row>
            <span className="mutualFriends">3 mutual friends</span>
          </Row>
          <Row>
            <Button size={"small"} className="addRemoveButtons">
              <img src="AddFriend.png" alt="" width="18px" />
              Add Friend
            </Button>
            <Button size={"small"} className="addRemoveButtons">Remove</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
