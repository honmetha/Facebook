import React, { Component } from 'react'
import './LoginMenuBar.css'
import { Row, Col, Input, Button } from 'antd'

export default class LoginMenuBar extends Component {
  render() {
    return (
      <Row className="fbLoginMenuBar">
        <Col span={3}>
        </Col>
        <Col span={18}>
          <Row className="loginMenuBar">
            <Col span={12}>
              <Row>
                <img src="facebookTextLogo.png" alt="" width="180px" />
              </Row>
            </Col>
            <Col span={12}>
              <Row type="flex" justify="end">
                <Col span={8}>
                  <Row className="whiteFontColor">Email or Phone</Row>
                  <Row><Input className="loginInput" /></Row>
                </Col>
                <Col span={8}>
                  <Row className="whiteFontColor">Password</Row>
                  <Row><Input className="loginInput" /></Row>
                  <Row>Forgotten account?</Row>
                </Col>
                <Col span={3}>
                  <Row>
                    <Button className="loginInputButton">Log in</Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3}>
        </Col>
      </Row>
    )
  }
}
