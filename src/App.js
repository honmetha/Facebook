import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Friend from './pages/Friend'
import axios from './config/axios.setup'
import jwtDecode from 'jwt-decode'

class App extends React.Component {
  state = {
    user: {}
  }

  handleLogin = (username, password) => {
    console.log("Hello World")
    axios.post('/loginUser', {
      username,
      password
    })
      .then(response => {
        localStorage.setItem('ACCESS_TOKEN', response.data.token)
        let user = jwtDecode(response.data.token)
        this.setState({
          user
        })
        this.props.history.push('/feed')
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN")
    this.setState({ user: {} })
    this.props.history.push('/')
  }

  componentWillMount() {
    let token = localStorage.getItem('ACCESS_TOKEN')
    if (token) {
      this.setState({
        user: jwtDecode(token)
      })
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={() => <Login handleLogin={this.handleLogin} />} />
          <Route exact path="/feed" component={() => <Feed handleLogout={this.handleLogout} user={this.state.user} />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/friend" component={Friend} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
