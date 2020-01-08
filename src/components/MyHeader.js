import React, { Component } from 'react'
import './MyHeader.css'
import { Row, Col, Input, Button, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'

const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://localhost:3000/feed">Activity Log</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://localhost:3000/feed">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="http://localhost:3000">Log Out</a>
    </Menu.Item>
  </Menu>
);

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
              <Link to="/profile">
                <img src="honmetha.jpg" alt="" width="30px" className="navProfilePic" />
                <strong>Hon</strong>
              </Link>
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
            <Dropdown overlay={menu} trigger={['click']} className="navIconDropdown">
              <a className="ant-dropdown-link" href="http://localhost:3000/feed">
                <img src="DropDown.png" alt="" width="30px" />
              </a>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    )
  }
}
