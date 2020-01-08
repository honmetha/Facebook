import React, { Component } from 'react'
import MyHeader from '../components/MyHeader'
import ProfileMenu from '../components/ProfileMenu'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'
import LanguageCard from '../components/LanguageCard'
import PrivacyTerms from '../components/PrivacyTerms'
import { Row, Col } from 'antd'
import './Pages.css'

export default class Profile extends Component {
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

  render() {
    return (
      <div>
        <MyHeader />
        <Row>
          <Col span={4}>
          </Col>
          <Col span={15}>
            <Row>
              <ProfileMenu />
            </Row>
            <Row gutter={10}>
              <Col span={10}>
                <Row type="flex" justify="end">
                  <LanguageCard />
                  <PrivacyTerms />
                </Row>
              </Col>
              <Col span={14}>
                <Row type="flex" justify="start">
                  <CreatePost />
                  <Post posts={this.state.posts} />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
          </Col>
        </Row>
      </div>
    )
  }
}
