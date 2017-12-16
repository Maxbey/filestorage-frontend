import React, { Component } from 'react'
import { DashboardView } from './DashboardView'
import { UploadComponent } from '../components/forms/UploadComponent'

import {Row, Col} from 'react-grid-system'

export class UploadView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col align="center" md={3}></Col>
          <Col style={{'padding':'10px'}} md={6}>
            <UploadComponent/>
          </Col>
          <Col align="center" md={3}></Col>
        </Row>
      </DashboardView>
    );
  }
}
