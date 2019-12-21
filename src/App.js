import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Friend from './pages/Friend'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/friend" component={Friend} />
          <Redirect to="/" />
        </Switch>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
