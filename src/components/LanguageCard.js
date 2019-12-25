import React, { Component } from 'react'
import './LanguageCard.css'
import { Card, Row, Col, Button } from 'antd';

export default class LanguageCard extends Component {
  render() {
    return (
      <Card className="languageCard">
        <Row className="addLanguages">
          <Col span={21} className="languageLineHeight">
            <span className="currentLanguageAndDots">English (US)</span>
            <span className="currentLanguageAndDots"> · </span>
            <a href="http://localhost:3000/feed" className="otherLanguagesLink">ภาษาไทย</a>
            <span className="currentLanguageAndDots"> · </span>
            <a href="http://localhost:3000/feed" className="otherLanguagesLink">日本語</a>
            <span className="currentLanguageAndDots"> · </span>
            <a href="http://localhost:3000/feed" className="otherLanguagesLink">Español</a>
            <span className="currentLanguageAndDots"> · </span>
            <a href="http://localhost:3000/feed" className="otherLanguagesLink">Português (Brasil)</a>
          </Col>
          <Col span={3}>
            <Row type="flex" justify="end">
              <Button className="addLanguageButton">
                <strong>+</strong>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
}
