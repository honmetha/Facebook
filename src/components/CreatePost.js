import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider, Input } from 'antd'

export default class CreatePost extends Component {
  render() {
    return (
      <Card className="CreatePostCard">
        <Row className="createPostTitle">
          <span>Create Post</span>
        </Row>
        <Divider className="createPostDivider" />
        <Row className="whatsOnYourMind">
          <Col>
            <Row className="whatsOnYourMindInput">
              <Col span={3}>
                <img src="honmetha.jpg" alt="" width="45px" className="whatsOnYourMindPic" />
              </Col>
              <Col span={21}>
                <Input placeholder="What's on your mind, Hon?" className="whatsOnYourMindInputText" />
              </Col>
            </Row>
            <Divider className="whatsOnYourMindDivider" />
            <Row className="whatsOnYourMindButtons">
              <Button className="createPostButtons">
                <img src="createPostPhoto.png" alt="" width="25" />
                Photo/Video
              </Button>
              <Button className="createPostButtons">
                <img src="createPostTag.png" alt="" width="25" />
                Tag Friends
              </Button>
              <Button className="createPostButtons">
                <img src="createPostFeeling.png" alt="" width="25" />
                Feeling/Activity
              </Button>
              <Button className="createPostButtons">...</Button>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}
