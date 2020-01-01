import React, { Component } from 'react'
import './CreateAccount.css'
import { Row, Col, Input, Button } from 'antd'
import Axios from 'axios'

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      imageUrl: ""
     };
  }

  handleSignUp = (e) => {
    Axios.post("http://localhost:8080/createUser", {
      username: this.state.userName,
      password: this.state.lastName,
      firstname: this.state.userName,
      lastname: this.state.password,
      profilepic: this.state.imageUrl
    }).then(result => {
      console.log(result.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

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
                  <Input onChange={e =>
                  this.setState({ firstName: e.target.value })
                  }
                  placeholder="First Name" />
                </Col>
                <Col span="12">
                  <Input onChange={e =>
                  this.setState({ lastName: e.target.value })
                  }
                  placeholder="Last Name" />
                </Col>
              </Row>
              <Row>
                <Input onChange={e =>
                  this.setState({ userName: e.target.value })
                  }
                  placeholder="Username" />
              </Row>
              <Row>
                <Input onChange={e =>
                  this.setState({ password: e.target.value })
                  }
                  placeholder="Password" />
              </Row>
              <Row>
                <Input onChange={e =>
                  this.setState({ imageUrl: e.target.value })
                  }
                  placeholder="Image Url" />
              </Row>
              <Row>
                <Button onClick={this.handleSignUp} type="primary">Sign Up</Button>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
    )
  }
}
