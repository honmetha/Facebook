import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider, Input, Form } from 'antd'

class CreatePost extends Component {
  
  render() {
    let { onChangePostText, onChangeImgUrl } = this.props
    return (
      <Card className="CreatePostCard">
        <Row className="createPostTitle">
          <span>Create Post</span>
        </Row>
        <Divider className="createPostDivider" />
        <Form onSubmit={this.props.onAddPost}>
          <Row className="whatsOnYourMind">
            <Col>
              <Row className="whatsOnYourMindInput">
                <Col span={3}>
                  <img src="honmetha.jpg" alt="" width="45px" className="whatsOnYourMindPic" />
                </Col>
                <Col span={21}>
                  <Form.Item>
                    <Input placeholder="What's on your mind, Hon?"
                      className="whatsOnYourMindInputText"
                      onChange={onChangePostText}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Image URL what you want"
                      className="ImageUrlWhatYouWant"
                      onChange={(e) => onChangeImgUrl(e)}
                    />
                  </Form.Item>
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
                <Button className="createPostButtons">
                  <img src="newsFeedEllipse.png" alt="" width="18" />
                </Button>
              </Row>
            </Col>
          </Row>
          <Divider className="whatsOnYourMindDivider" />
          <Row className="feedOrStory">
            <Col>
              <Row>
                <Col span={19}>
                  <input type="radio" name="" value="feed" />
                  News Feed
                </Col>
                <Col span={5}>
                  <button>
                    <img src="Friends.png" alt="" width="17" />
                    <span>Friends</span>
                  </button>
                </Col>
              </Row>
              <Row>
                <Col span={19}>
                  <input type="radio" name="" value="story" />
                  Your Story
                </Col>
                <Col span={5}>
                  <button>
                    <img src="Friends.png" alt="" width="17" />
                    <span>Friends</span>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="postButtonRow">
            <Button type="primary" htmlType="submit" className="postButton">
              Post
            </Button>
          </Row>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(CreatePost)