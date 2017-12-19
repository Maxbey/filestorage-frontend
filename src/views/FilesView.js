import React, { Component } from 'react'
import { DashboardView } from './DashboardView'
import { FilesList } from '../components/FilesList'
import {Row, Col} from 'react-grid-system'

export class FilesView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            <FilesList/>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}
