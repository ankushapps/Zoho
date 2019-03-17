import React, { Component } from 'react';
import ListHead from './Common/ListHead';
import ListBody from './Common/ListBody';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <ListHead />
        <ListBody />
      </div>
    );
  }
}
