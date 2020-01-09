import React, { Component } from 'react'
import './CreatePost.css'
import { Card, Row, Col, Button, Divider, Input, Form, Upload } from 'antd'
import Axios from 'axios'

class CreatePost extends Component {
  state = {
    visible: false,
    displayFeedStory: "none"
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChangePostText = (e) => {
    this.setState({ postText: e.target.value })
  }

  handleChangeImgUrl = (e) => {
    this.setState({ imgUrl: e.target.value })
  }

  handleBeforeUpload = file => {
    this.setState(state => ({
      fileList: [file],
    }));
    return false;
  }

  handleRemoveUpload = () => {
    this.setState(state => ({
      fileList: []
    }))
  }

  handleAddPost = (e) => {
    e.preventDefault();
    console.log(this.state.fileList)
    let data = new FormData()
    if (this.state.fileList) {
      data.append('postImage', this.state.fileList[0])
    }
    data.append('message', this.state.postText)
    Axios.post('http://localhost:8080/createPost', data)
      .then(result => {
        console.log(result)
        this.handleRemoveUpload()
        this.setState({
          postText: ''
        })
        this.props.fetchData()
      })
      .catch(err => {
        console.error(err);
      })
    // const { postText, imgUrl } = this.state
    // this.props.onSubmit(postText, imgUrl)
    // this.setState({ posts: [{ text: postText, imgUrl: imgUrl }, ...posts] })
  }

  handleClick = (e) => {
    this.setState({ displayFeedStory: "" })
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
                      onClick={this.handleClick}
                      value={this.state.postText}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Divider className="whatsOnYourMindDivider" />
              <Row className="whatsOnYourMindButtons">
                <Upload
                  onRemove={this.handleRemoveUpload}
                  beforeUpload={this.handleBeforeUpload}
                  fileList={this.state.fileList}
                >
                  <Button className="createPostButtons">
                    <img src="createPostPhoto.png" alt="" width="25" />
                    Photo/Video
                  </Button>
                </Upload>
                <Button className="createPostButtons">
                  <img src="createPostTag.png" alt="" width="25" />
                  Tag Friends
                </Button>
                <Button className="createPostButtons">
                  <img src="createPostFeeling.png" alt="" width="25" />
                  Feeling/Activity
                </Button>
                <Button className="createPostButtons CPEllipseButton">
                  <img src="newsFeedEllipse.png" alt="" width="18" />
                </Button>
              </Row>
            </Col>
          </Row>
          <Divider className="whatsOnYourMindDivider" style={{ display: this.state.displayFeedStory }} />
          <Row className="feedOrStory" style={{ display: this.state.displayFeedStory }}>
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
          <Row className="postButtonRow" style={{ display: this.state.displayFeedStory }}>
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