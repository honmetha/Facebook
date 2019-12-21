import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import './Leftnavbar.css'

export default class Leftnavbar extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
          <Button type="default" block className="profileButton">
            <img src="honmetha.jpg" width="25px" alt="Hon Metha" className="ProfilePic" />
            Hon Metha
          </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
