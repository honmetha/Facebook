import React, { Component } from 'react'
import './ProfileMenu.css'
import { Row, Col, Card, Radio } from 'antd'

export default class ProfileMenu extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Card className="profileMenuBar">
          <div class="container">
            <img src="facebookCover.jpg" alt="" width="100%" />
            <div class="bottom-left">
              <img src="honmetha.jpg" alt="" className="mainProfilePic" width="100%" />
            </div>
            <div class="bottom-right">Bottom Right</div>
            <div class="centered">
              <span className="mainProfileName">Hon Metha</span>
            </div>
          </div>
          <Row>
            <Col span={6}></Col>
            <Col span={16}>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">Timeline</strong>
              </Radio.Button>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">About</strong>
              </Radio.Button>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">Friends</strong>
              </Radio.Button>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">Photos</strong>
              </Radio.Button>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">Archive</strong>
              </Radio.Button>
              <Radio.Button className="profileMenuBottons">
                <strong className="profileMenuBottonsText">More</strong>
              </Radio.Button>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Card>
      </Row>
    )
  }
}
