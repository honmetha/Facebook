import React, { Component } from 'react'
import MyHeader from '../components/MyHeader'
import Post from '../components/Post'
import LanguageCard from '../components/LanguageCard'
import PrivacyTerms from '../components/PrivacyTerms'
import { Row, Col } from 'antd'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <Row>
          <Col span={4}>
            1
          </Col>
          <Col span={14}>
            <Row>
              ABC
            </Row>
            <Row>
              <Col span={9}>
                <Row type="flex" justify="end">
                  <LanguageCard />
                  <PrivacyTerms />
                </Row>
              </Col>
              <Col span={15}>
                <Row type="flex" justify="start">
                  <Post />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            3
          </Col>
        </Row>
      </div>
    )
  }
}
