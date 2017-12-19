import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider';
import Group from 'material-ui/svg-icons/social/group'

import { GroupActions } from '../actions/GroupActions'

class GroupsList extends React.Component {
  constructor(props){
    super(props)

    this.groupActions = new GroupActions()
    this.props.dispatch(this.groupActions.getGroups())
  }

  renderGroups(groupsData) {
    return groupsData.map((group, index) => (
      <div>
        <ListItem
          key={index}
          primaryText={group.name} leftIcon={<Group />}
          containerElement={<Link to={`/groups/${group.id}`} />}
        />
      </div>
    ))

}

  render(){
    return (
      <List>
        {this.renderGroups(this.props.groups)}
      </List>
    )
  }
}

function mapStateToProps(state) {
    return {...state.groupReducer}
}

const connected = connect(mapStateToProps)(GroupsList)
export {connected as GroupsList}
