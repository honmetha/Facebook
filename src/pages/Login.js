import React, { Component } from 'react'
import LoginMenuBar from '../components/LoginMenuBar'
import CreateAccount from '../components/CreateAccount'

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginMenuBar />
        <CreateAccount />
      </div>
    )
  }
}
