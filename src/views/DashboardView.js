import React, { Component } from 'react';
import { AppNav } from '../components/topnav/AppNav';
import { AppDrawer } from '../components/AppDrawer';
import {Row} from 'react-grid-system'

export class DashboardView extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Row>
          <AppNav/>
          <AppDrawer/>
        </Row>
        { this.props.children }
      </div>
    );
  }
}
