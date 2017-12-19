import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-grid-system'

import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'

import { DashboardView } from './DashboardView'
import { GroupActions } from '../actions/GroupActions'

const chipsSequenceStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
}


class GroupDetailView extends Component {
  constructor(props){
    super(props)
    this.groupActions = new GroupActions()

    this.props.dispatch(this.groupActions.getGroup(
      this.props.match.params.id
    ))
  }

  deleteGroup = () => {
    this.props.dispatch(
      this.groupActions.deleteGroup(this.props.group.id)
    )
  }

  renderDetails(){
    let group = this.props.group

    if (!group){
      return
    }

    return (
      <div>
        <TextField
          disabled={true}
          defaultValue={group.name}
          fullWidth
          floatingLabelText='Name'
        />
        <div style={chipsSequenceStyle}>
          <Subheader style={{paddingLeft: 0}}>Shared with users</Subheader>
          {group.users.map((user, index) => (
            <Chip style={{marginRight: '10px'}} key={index}>{user.email}</Chip>
          ))}
        </div>

        <div style={chipsSequenceStyle}>
          <Subheader style={{paddingLeft: 0}}>Shared files</Subheader>
          {group.files.map((file, index) => (
            <Chip style={{marginRight: '10px'}} key={index}>{file.name}</Chip>
          ))}
        </div>
        <RaisedButton style={{marginTop: '20px'}}
          label="Edit" primary fullWidth
          containerElement={
            <Link to={`/groups/${this.props.group.id}/edit`} />
          }
        />
        <RaisedButton style={{marginTop: '20px'}}
         label="Delete" secondary fullWidth onClick={this.deleteGroup}
        />
      </div>
    )
  }

  render() {

    return (
      <DashboardView>
        <Row style={{height: '85%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            {this.renderDetails()}
          </Col>
        </Row>
      </DashboardView>
    )
  }
}


function mapStateToProps(store, props) {
    return {...store.groupReducer}
}

const connected = connect(mapStateToProps)(GroupDetailView)
export { connected as GroupDetailView }
