import React, { Component } from 'react'
import './PrivacyTerms.css'
import { Card, Row, Col } from 'antd'

export default class PrivacyTerms extends Component {
  render() {
    return (
      <Card className="privacyTermsCard">
        <Row className="privacyTermsContent">
          <Col>
            <Row>
              <a href="http://localhost:3000/feed" className="grayFontColor">Privacy</a>
              <span className="grayFontColor"> · </span>
              <a href="http://localhost:3000/feed" className="grayFontColor">Terms</a>
              <span className="grayFontColor"> · </span>
              <a href="http://localhost:3000/feed" className="grayFontColor">Advertising</a>
              <span className="grayFontColor"> · </span>
              <a href="http://localhost:3000/feed" className="grayFontColor">Ad Choices </a>
              <img src="AdChoices.png" alt="" width="14px" className="adChoicesIcon" />
              <span className="grayFontColor"> · </span>
              <a href="http://localhost:3000/feed" className="grayFontColor">Cookies</a>
              <span className="grayFontColor"> · </span>
              <a href="http://localhost:3000/feed" className="grayFontColor">More</a>
            </Row>
            <Row>
              <span className="fbCopyRight">Facebook © 2019</span>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}
