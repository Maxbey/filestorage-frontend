import React, { Component } from 'react';
import { AppNav } from '../components/topnav/AppNav';
import { AppDrawer } from '../components/AppDrawer';

export class DashboardView extends Component {
  render() {
    return (
      <div style={{'height': '85%'}}>
        <AppNav/>
        <AppDrawer/>
        { this.props.children }
      </div>
    );
  }
}
