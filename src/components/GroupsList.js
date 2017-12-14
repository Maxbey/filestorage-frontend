import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import GroupIcon from 'material-ui-icons/Group'
import EditIcon from 'material-ui-icons/Edit'

import { GroupActions } from '../actions/GroupActions'

class GroupsList extends React.Component {
  constructor(props){
    super(props)

    this.groupActions = new GroupActions()
    this.props.dispatch(this.groupActions.getGroups())
  }

  renderGroups(groupsData) {
    return groupsData.map(group => (
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <GroupIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={group.name}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
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
