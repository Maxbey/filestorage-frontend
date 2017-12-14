import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import FileUploadIcon from 'material-ui-icons/FileUpload'
import StorageIcon from 'material-ui-icons/Storage'
import GroupIcon from 'material-ui-icons/Group'
import { AppActions } from '../actions/AppActions'

const styles = {
  list: {
    width: 250
  }
}

class AppDrawer extends React.Component {
  constructor(){
    super()

    this.closeDrawer = this.closeDrawer.bind(this)
  }

  closeDrawer(e){
    this.props.dispatch(AppActions.closeDrawer())
  }

  render() {
    const { classes } = this.props;
    return (
      <Drawer open={this.props.open} onRequestClose={this.closeDrawer}>
        <div className={classes.list}>
          <List>
            <ListItem button
              component={Link} to='/' onClick={this.closeDrawer}
            >
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Files" />
            </ListItem>
            <ListItem button
              component={Link} to='/upload/' onClick={this.closeDrawer}
            >
              <ListItemIcon>
                <FileUploadIcon />
              </ListItemIcon>
              <ListItemText primary="Upload files" />
            </ListItem>
            <ListItem button
              component={Link} to='/groups/' onClick={this.closeDrawer}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
    return {...state.drawerReducer}
}

const styled = withStyles(styles)(AppDrawer)
const connected = connect(mapStateToProps)(styled)

export {connected as AppDrawer}
