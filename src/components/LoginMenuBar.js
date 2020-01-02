import React, { Component } from 'react'
import './LoginMenuBar.css'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class LoginMenuBar extends Component {
  render() {
    return (
      <Row className="fbLoginMenuBar">
        <Col span={3}>
        </Col>
        <Col span={18}>
          <Row className="loginMenuBar">
            <Col span={12}>
              <Row className="fbTextLogo">
                <Link to="/"><img src="facebookTextLogo.png" alt="" width="180" className="fbTextLogoImage" /></Link>
              </Row>
            </Col>
            <Col span={12}>
              <Row type="flex" justify="end">
                <Col span={8}>
                  <Row className="usernamePasswordText">Email or Phone</Row>
                  <Row><input className="loginInput" /></Row>
                </Col>
                <Col span={8}>
                  <Row className="usernamePasswordText">Password</Row>
                  <Row><input className="loginInput" /></Row>
                  <Row className="forgottenAccount">
                    <a href="url" className="forgottenAccountText">Forgotten account?</a>
                  </Row>
                </Col>
                <Col span={3}>
                  <Row className="loginInputButtonRow">
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
