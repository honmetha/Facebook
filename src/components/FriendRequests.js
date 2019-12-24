import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import './FriendRequests.css'
import RequestedFriend from './RequestedFriend'

export default class FriendRequests extends Component {
  render() {
    return (
      <div>
        <Card className="friRequestCard">
          <Row className="friRequestHeader">
            <Col span={20}>
              <span className="friendRequests">Friend Requests</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <a href="http://localhost:3000/feed">
                  <span className="seeAll">See all</span>
                </a>
              </Row>
            </Col>
          </Row>
          <RequestedFriend />
          <RequestedFriend />
          <RequestedFriend />
        </Card>
      </div>
    )
  }
}
