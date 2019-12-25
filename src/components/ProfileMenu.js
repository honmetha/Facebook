import React, { Component } from 'react'
import './ProfileMenu.css'
import { Row, Col, Card, Radio } from 'antd'

export default class ProfileMenu extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Card className="profileMenuBar">
          <img src="facebookCover.jpg" alt="" width="100%" />
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
