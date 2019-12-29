import React, { Component } from 'react'
import MyHeader from '../components/MyHeader'
import Leftnavbar from '../components/Leftnavbar'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import FriendSuggestions from '../components/FriendSuggestions'
import FriendRequests from '../components/FriendRequests'
import LanguageCard from '../components/LanguageCard'
import PrivacyTerms from '../components/PrivacyTerms'
import { Row, Col } from 'antd'

export default class Feed extends Component {
  state = {
    postText: '',
    imgUrl: '',
    posts: [
      {
        text: `Don't be jealous at me. This is not my car.`,
        imgUrl: 'https://images.unsplash.com/photo-1542128962-9d50ad7bf014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        text: `Look at my desk`,
        imgUrl: 'https://images.unsplash.com/photo-1489257712451-3a66755ca19c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
    ]
  }

  handleChangePostText = (e) => {
    this.setState({ postText: e.target.value })
  }

  handleChangeImgUrl = (e) => {
    this.setState({ imgUrl: e.target.value })
  }

  handleAddPost = (e) => {
    e.preventDefault();
    const { postText, imgUrl, posts } = this.state
    this.setState({ posts: [...posts, { text: postText, imgUrl: imgUrl }] })
  }

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
              <CreatePost onAddPost={this.handleAddPost}
                onChangePostText={this.handleChangePostText}
                onChangeImgUrl={this.handleChangeImgUrl}
              />
              {
                this.state.posts.map(post => (
                  <Post postText={post.text} imgUrl={post.imgUrl} />
                ))
              }
            </Col>
            <Col span={8}>
              <Row type="flex" justify="start">
                <Col>
                  <FriendRequests />
                  <FriendSuggestions />
                  <LanguageCard />
                  <PrivacyTerms />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
