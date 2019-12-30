import React, { Component } from 'react'
import { Row, Col, Card, Input, Divider, Button } from 'antd';
import './Post.css'

export default class Post extends Component {
  render() {
    return (
      <Card className="ant-card-body postCard">
        <Row className="cardHeader">
          <Col span={2}>
            <img src="honmetha.jpg" alt="" width="40px" className="postProfilePic" />
          </Col>
          <Col span={20} className="profileText">
            <Row className="profileName">
              <strong>Hon Metha</strong>
            </Row>
            <Row>
              <span>Just now · </span>
              <img src="publicShared.png" alt="" width="13px" />
            </Row>
          </Col>
          <Col span={1}>
            <a href="http://localhost:3000/feed#"><img src="ellipsis.png" alt="" width="25px" /></a>
          </Col>
        </Row>
        <Row>
          <Col className="descriptionPart">
            <span>{this.props.postText}</span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <img src={this.props.imgUrl} 
            alt="" 
            width="100%" 
            />
          </Col>
        </Row>
        <Row className="peopleEmoji">
          <a href="http://localhost:3000/feed">
            <img src="likeIcon.png" alt="" width="20px" />
          </a>
          <a href="http://localhost:3000/feed">
            <span> You</span>
          </a>
        </Row>
        <Divider className="emojiButtonDivider" />
        <Row>
          <Col span={12}>
            <Row type="flex" justify="center">
              <Button type="link" className="actionButtons">
                <img src="Like.png" alt="" width="35px" />
                <span>Like</span>
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="center">
              <Button type="link" className="actionButtons">
                <img src="Comment.png" alt="" width="35px" />
                <span>Comment</span>
              </Button>
            </Row>
          </Col>
        </Row>
        <Divider className="buttonCommentDivider" />
        <Row className="commentInput">
          <Col span={2}>
            <img src="honmetha.jpg" alt="" width="35px" className="commentProfilePic" />
          </Col>
          <Col span={22}>
            <Input placeholder="Write a comment..." className="commentInputBar" />
          </Col>
        </Row>
      </Card>
    )
  }
}
