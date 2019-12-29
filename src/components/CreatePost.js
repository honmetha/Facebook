import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider, Input, Form } from 'antd'

class CreatePost extends Component {

  state = {
    postText: '',
    imgUrl: '',
  }

  render() {
    let { onChangePostText, onChangeImgUrl } = this.props
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
                <Form onSubmit={this.props.onAddPost}>
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
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
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

export default Form.create()(CreatePost)