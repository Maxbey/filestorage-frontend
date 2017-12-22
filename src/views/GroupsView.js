import React, { Component } from 'react'
import { DashboardView } from './DashboardView'
import { GroupsList } from '../components/GroupsList'

import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import GroupAdd from 'material-ui/svg-icons/social/group-add'

import {Row, Col} from 'react-grid-system'


export class GroupsView extends Component {
  render() {
    return (
      <DashboardView>
        <Row style={{height: '77%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            <Subheader style={{fontSize: '32px'}}>Groups</Subheader>
            <GroupsList/>
          </Col>
        </Row>
        <Row>
          <Col style={{padding: 10}} offset={{md: 11}} md={1}>
            <FloatingActionButton style={{float: 'right'}}
              containerElement={<Link to='/group/' />}
            >
              <GroupAdd/>
            </FloatingActionButton>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}
