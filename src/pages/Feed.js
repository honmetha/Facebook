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
import './Pages.css'
import Axios from '../config/axios.setup'

export default class Feed extends Component {
  state = {
    postText: '',
    imgUrl: '',
    posts: [
    ]
  }

  handleSubmit = (postText, imgUrl) => {
    this.setState({ posts: [{ text: postText, imgUrl: imgUrl }, ...this.state.posts] })
  }

  fetchData = () =>{
    Axios.get('/getAllPost')
    .then(result=>{
      console.log(result)
      this.setState({
        posts: result.data
      })
    })
  }

  componentWillMount(){
    this.fetchData()
  }

  render() {
    return (
      <Row>
        <Col>
          <MyHeader handleLogout={this.props.handleLogout} user={this.props.user} />
        </Col>
        <Col>
          <Row gutter={10} className="marginZero">
            <Col span={7}>
              <Row type="flex" justify="end">
                <Col>
                  <Leftnavbar user={this.props.user} />
                </Col>
              </Row>
            </Col>
            <Col span={9}>
              <CreatePost fetchData={this.fetchData} onSubmit={this.handleSubmit} user={this.props.user} />
              <Post posts={this.state.posts} user={this.props.user} />
            </Col>
            <Col span={5}>
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
