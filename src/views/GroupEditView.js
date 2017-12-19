import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-grid-system'

import { GroupForm } from '../components/forms/GroupForm'
import { DashboardView } from './DashboardView'
import { GroupActions } from '../actions/GroupActions'


class GroupEditView extends Component {
  constructor(props){
    super(props)
    this.groupActions = new GroupActions()

    this.props.dispatch(this.groupActions.getGroup(
      this.props.match.params.id
    ))
  }

  renderForm(){
    let group = this.props.group

    if (!group){
      return
    }

    return (
      <GroupForm
        instance={group} submitLabel='update'
        submitAction='UPDATE'
      />
    )
  }

  render() {

    return (
      <DashboardView>
        <Row style={{height: '85%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            {this.renderForm()}
          </Col>
        </Row>
      </DashboardView>
    )
  }
}


function mapStateToProps(store, props) {
    return {...store.groupReducer}
}

const connected = connect(mapStateToProps)(GroupEditView)
export { connected as GroupEditView }
