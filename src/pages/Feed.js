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
import Axios from 'axios'

export default class Feed extends Component {
  state = {
    postText: '',
    imgUrl: '',
    posts: [
      {
        text: `Don't be jealous at me. This is not my bike.`,
        imgUrl: 'https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },
      {
        text: `Someone else's house lol`,
        imgUrl: 'https://images.unsplash.com/photo-1491489226161-1d38cb39ec64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      }
    ]
  }

  handleSubmit = (postText, imgUrl) => {
    this.setState({ posts: [{ text: postText, imgUrl: imgUrl }, ...this.state.posts] })
  }

  fetchData = () =>{
    Axios.get('http://localhost:8080/getAllPost')
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
          <MyHeader />
        </Col>
        <Col>
          <Row gutter={10} className="marginZero">
            <Col span={7}>
              <Row type="flex" justify="end">
                <Col>
                  <Leftnavbar />
                </Col>
              </Row>
            </Col>
            <Col span={9}>
              <CreatePost fetchData={this.fetchData} onSubmit={this.handleSubmit}/>
              <Post posts={this.state.posts} />
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
