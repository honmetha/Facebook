import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'antd'
import './FriendSuggestions.css'

export default class FriendSuggestions extends Component {
  render() {
    return (
      <div>
        <Card className="friSuggestionCard">
          <Row className="friSuggestionHeader">
            <Col span={20}>
              <span className="peopleYouMayKnow">People You May Know</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <a href="http://localhost:3000/feed">
                  <span className="seeAll">See all</span>
                </a>
              </Row>
            </Col>
          </Row>
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
        </Card>
      </div>
    )
  }
}
