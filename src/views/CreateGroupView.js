import React, { Component } from 'react'

import { GroupForm } from '../components/forms/GroupForm'
import { DashboardView } from '../views/DashboardView'

import {Row, Col} from 'react-grid-system'

export class CreateGroupView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col offset={{md: 4}} style={{'padding':'10px'}} md={4}>
            <GroupForm submitLabel='create' submitAction='CREATE'/>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}
