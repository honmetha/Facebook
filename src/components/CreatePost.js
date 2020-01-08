import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider, Input, Form } from 'antd'

class CreatePost extends Component {

  handleChangePostText = (e) => {
    this.setState({ postText: e.target.value })
  }

  handleChangeImgUrl = (e) => {
    this.setState({ imgUrl: e.target.value })
  }

  handleAddPost = (e) => {
    e.preventDefault();
    const { postText, imgUrl } = this.state
    this.props.onSubmit(postText, imgUrl)
    // this.setState({ posts: [{ text: postText, imgUrl: imgUrl }, ...posts] })
  }

  render() {
    return (
      <Card className="CreatePostCard">
        <Row className="createPostTitle">
          <span>Create Post</span>
        </Row>
        <Divider className="createPostDivider" />
        <Form onSubmit={this.handleAddPost}>
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
                      onChange={this.handleChangePostText}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Image URL what you want"
                      className="whatsOnYourMindInputText"
                      onChange={(e) => this.handleChangeImgUrl(e)}
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
                <Col span={19} className="feedOrStoryMain">
                  <input type="radio" name="" value="feed" className="feedStoryRadio" />
                  <img src="createPostNewsFeed.png" alt="" width="39" className="feedStoryIcon" />
                  News Feed
                </Col>
                <Col span={5}>
                  <Row type="flex" justify="end">
                    <button className="friendButtons">
                      <img src="Friends.png" alt="" width="17" />
                      <span> Friends</span>
                    </button>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={19} className="feedOrStoryMain">
                  <input type="radio" name="" value="story" className="feedStoryRadio" />
                  <img src="honMetha.jpg" alt="" width="39" className="feedStoryIcon" />
                  Your Story
                </Col>
                <Col span={5}>
                  <Row type="flex" justify="end">
                    <button className="friendButtons">
                      <img src="Friends.png" alt="" width="17" />
                      <span> Friends</span>
                    </button>
                  </Row>
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