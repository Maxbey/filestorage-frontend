import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'

import Storage from 'material-ui/svg-icons/device/storage'
import FileUpload from 'material-ui/svg-icons/file/file-upload'
import Group from 'material-ui/svg-icons/social/group'


import { AppActions } from '../actions/AppActions'

class AppDrawer extends React.Component {
  constructor(){
    super()

    this.closeDrawer = this.closeDrawer.bind(this)
  }

  closeDrawer(e){
    this.props.dispatch(AppActions.closeDrawer())
  }

  render() {
    return (
      <Drawer
        open={this.props.open} onRequestChange={this.closeDrawer}
        width={250} docked={false}
      >
        <MenuItem linkButton  containerElement={<Link to='/' />}
          onClick={this.closeDrawer} leftIcon={<Storage/>}>
          Files
        </MenuItem>
        <MenuItem linkButton containerElement={<Link to='/upload/' />}
         onClick={this.closeDrawer} leftIcon={<FileUpload/>}>
         Upload files
        </MenuItem>
        <MenuItem linkButton containerElement={<Link to='/groups/' />}
         onClick={this.closeDrawer} leftIcon={<Group/>}>
         Groups
        </MenuItem>
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
    return {...state.drawerReducer}
}

const connected = connect(mapStateToProps)(AppDrawer)

export {connected as AppDrawer}
