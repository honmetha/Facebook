import React, { Component } from 'react'
import { Row, Col, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class Post extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Card
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    )
  }
}
