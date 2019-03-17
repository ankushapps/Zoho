import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import { Route } from 'react-router';
import { Home } from '../components/Home';
import { FetchData } from '../components/FetchData';
import { Counter } from '../components/Counter';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Sidebar />
        <Content>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
        </Content>
      </div>
    );
  }
}
