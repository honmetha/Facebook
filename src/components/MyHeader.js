import React, { Component } from 'react'
import './MyHeader.css'
import { Row, Col, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

const { Search } = Input;


export default class MyHeader extends Component {
  render() {
    return (
      <Row className="fbNavBar">
        <Col span={12}>
          <Row type="flex" justify="end">
            <Link to="/feed" className="fbLogo">
              <img src="fblogo.png" alt="" width="31.7px" />
            </Link>
            <Search placeholder="Search" enterButton className="searchBar" />
          </Row>
        </Col>
        <Col span={12}>
          <Row type="flex" justify="center">
            <Button type="link" ghost className="profilePicButton">
              <img src="honmetha.jpg" alt="" width="30px" className="navProfilePic" />
              <strong className="navProfileText">Hon</strong>
            </Button>
            <Button type="link" ghost className="navTextButton">
              <Link to="/feed">
              <strong>Home</strong>
              </Link>
            </Button>
            <Button type="link" ghost className="navTextButton textIconButtonMargin">
              <strong>Create</strong>
            </Button>
            <Button type="link" ghost className="navIconButton">
              <img src="FriendRequests.png" alt="" width="30px" />
            </Button>
            <Button type="link" ghost className="navIconButton">
              <img src="Messages.png" alt="" width="30px" />
            </Button>
            <Button type="link" ghost className="navIconButton">
              <img src="Notifications.png" alt="" width="30px" />
            </Button>
            <Button type="link" ghost className="navIconButton">
              <img src="QuickHelp.png" alt="" width="30px" />
            </Button>
            <Button type="link" ghost className="navIconButton">
              <img src="DropDown.png" alt="" width="30px" />
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
