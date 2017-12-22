import React, { Component } from 'react'

import Subheader from 'material-ui/Subheader'
import {Row, Col} from 'react-grid-system'

import { GroupForm } from '../components/forms/GroupForm'
import { DashboardView } from '../views/DashboardView'

export class CreateGroupView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col offset={{md: 4}} style={{'padding':'10px'}} md={4}>
            <Subheader style={{fontSize: '32px'}}>Create group</Subheader>
            <GroupForm submitLabel='create' submitAction='CREATE'/>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}
