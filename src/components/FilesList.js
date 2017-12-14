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
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import AttachmentIcon from 'material-ui-icons/Attachment'
import DeleteIcon from 'material-ui-icons/Delete'

import { FileActions } from '../actions/FileActions'

class FilesList extends React.Component {
  constructor(props){
    super(props)

    this.fileActions = new FileActions()
    this.downloadFile = this.downloadFile.bind(this)

    this.props.dispatch(this.fileActions.getFiles())
  }

  downloadFile(e){

  }

  renderFiles(filesData) {
    return filesData.map(file => (
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <AttachmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={file.name}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Download">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))

}

  render(){
    return (
      <List>
        {this.renderFiles(this.props.files)}
      </List>
    )
  }
}

function mapStateToProps(state) {
    return {...state.fileReducer}
}

const connected = connect(mapStateToProps)(FilesList)
export {connected as FilesList}
