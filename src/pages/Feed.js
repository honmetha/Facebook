import React, { Component } from 'react'
import MyHeader from '../components/MyHeader'
import Leftnavbar from '../components/Leftnavbar'
import Post from '../components/Post'
import FriendSuggestions from '../components/FriendSuggestions'
import FriendRequests from '../components/FriendRequests'
import { Row, Col } from 'antd'

export default class Feed extends Component {
  render() {
    return (
      <Row>
        <Col>
          <MyHeader />
        </Col>
        <Col>
          <Row>
            <Col span={7}>
              <Row type="flex" justify="end">
                <Col>
                  <Leftnavbar />
                </Col>
              </Row>
            </Col>
            <Col span={9}>
              <Post />
              <Post />
              <Post />
            </Col>
            <Col span={8}>
              <Row type="flex" justify="start">
                <Col>
                  <FriendRequests />
                  <FriendSuggestions />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
