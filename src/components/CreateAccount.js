import React, { Component } from 'react'
import './CreateAccount.css'
import { Row, Col, Input } from 'antd'

export default class CreateAccount extends Component {
  render() {
    return (
      <Row className="createAccount">
        <Col span={3}></Col>
        <Col span={18}>
          <Row>
            <Col span={14}>
              <Row className="fbLoginText">
                <span>
                  Facebook helps you connect and share with the people in your life.
                </span>
              </Row>
              <img src="fbLoginPic.png" alt="" width="100%" />
            </Col>
            <Col span={10}>
              <Row className="createAccountHeader">
                <span>Create an account</span>
              </Row>
              <Row className="createAccountText">
                <span>It's quick and easy.</span>
              </Row>
              <Row>
                <Col span="12">
                  <Input placeholder="First Name" />
                </Col>
                <Col span="12">
                  <Input placeholder="Last Name" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
    )
  }
}
