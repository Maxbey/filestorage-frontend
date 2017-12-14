import React, { Component } from 'react';
import { TopNav } from '../components/topnav/TopNav';

export class AuthView extends Component {
  render() {
    return (
      <div style={{'height': '90%'}}>
        <TopNav/>
        { this.props.children }
      </div>
    );
  }
}
