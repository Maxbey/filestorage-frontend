import React, { Component } from 'react'
import Subheader from 'material-ui/Subheader'

import { DashboardView } from './DashboardView'
import { UploadComponent } from '../components/forms/UploadComponent'

import {Row, Col} from 'react-grid-system'

export class UploadView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col align="center" offset={{md: 3}} style={{'padding':'10px'}} md={6}>
            <Subheader style={{fontSize: '32px', padding: '0 0 30px 0'}}>
              Upload files
            </Subheader>
            <UploadComponent/>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}
