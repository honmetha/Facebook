import React, { Component } from 'react'
import './MyHeader.css'
import { Row, Col, Input, Button } from 'antd'

const { Search } = Input;


export default class MyHeader extends Component {
  render() {
    return (
      <Row className="fbNavBar">
        <Col span={12}>
          <Row type="flex" justify="end">
            <img src="fblogo.png" alt="Facebook" width="30px" className="fbLogo" />
            <Search placeholder="Search" enterButton className="searchBar" />
          </Row>
        </Col>
        <Col span={12}>
          <Row type="flex" justify="center">
            <Button type="link" ghost className="profilePicButton">
              <img src="honmetha.jpg" alt="Hon Metha" width="30px" className="navProfilePic" />
              <strong className="navProfileText">Hon</strong>
            </Button>
            <Button type="link" ghost className="navTextButton">
              <strong>Home</strong>
            </Button>
            <Button type="link" ghost className="navTextButton">
              <strong>Create</strong>
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
