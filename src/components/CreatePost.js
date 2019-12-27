import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider } from 'antd'

export default class CreatePost extends Component {
  render() {
    return (
      <Card className="CreatePostCard">
        <Row className="CreatePostInside">
          <Col>
            <Row>Create Post</Row>
            <Divider />
            <Row>
              <Col span={6}>
                2
              </Col>
              <Col span={18}>
                What's on your mind, Hon?
              </Col>
            </Row>
            <Divider />
            <Row>
              <Button>Photo/Video</Button>
              <Button>Tag Friends</Button>
              <Button>Feeling/Activity</Button>
              <Button>...</Button>
            </Row>
          </Col>
        </Row>
        
      </Card>
    )
  }
}
