import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import './Leftnavbar.css'

export default class Leftnavbar extends Component {
  render() {
    return (
      <Card className="Leftnavbar">
        <Row className="leftSideProfile padding1p5">
          <Link to="/profile">
            <Col span={4}>
              <img src="honmetha.jpg" alt="" width="25px" className="ProfilePic marginTop-10" />
            </Col>
            <Col span={14}>
              <span className="blackColor">Hon Metha</span>
            </Col>
          </Link>
          <Col span={6}>
            <Row type="flex" justify="end">
            </Row>
          </Col>
        </Row>
        <Row className="padding1p5 NewsFeedBox">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="NewsFeed.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={14}>
              <span className="blackColor newsFeedText">News feed</span>
            </Col>
            <Col span={6}>
              <Row type="flex" justify="end">
                <Col align="middle">
                  <img src="newsFeedEllipse.png" alt="" width="18px" className="newsFeedEllipse" />
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Messenger.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={20}>
              <span className="blackColor">Messenger</span>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Watch.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={16}>
              <span className="blackColor">Watch</span>
            </Col>
            <Col span={4} align="middle">
              <Row type="flex" justify="end">
                <Col>
                  <img src="redDot.png" alt="" width="8" />
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Marketplace.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={20}>
              <span className="blackColor">Marketplace</span>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <span className="leftHeaderFont">Shortcuts</span>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="ShortcutsGroup.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={16}>
              <span className="blackColor">Code Camp 4</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <Col align="middle">
                  <span className="notiNumberFont">3</span>
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <span className="leftHeaderFont">Explore</span>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Groups.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={20}>
              <span className="blackColor">Groups</span>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Pages.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={16}>
              <span className="blackColor">Pages</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <Col align="middle">
                  <span className="notiNumberFont">9</span>
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Events.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={16}>
              <span className="blackColor">Events</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <Col align="middle">
                  <span className="notiNumberFont">1</span>
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="Fundraisers.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={20}>
              <span className="blackColor">Fundraisers</span>
            </Col>
          </a>
        </Row>
        <Row className="padding1p5">
          <a href="http://localhost:3000/feed">
            <Col span={4}>
              <img src="AdsManager.png" alt="" width="25px" className="marginTop-10" />
            </Col>
            <Col span={20}>
              <span className="blackColor">Ads Manager</span>
            </Col>
          </a>
        </Row>
      </Card>
    )
  }
}
