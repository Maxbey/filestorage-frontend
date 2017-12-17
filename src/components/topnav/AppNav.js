import React from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

import { AppActions } from '../../actions/AppActions'
import { AuthActions } from '../../actions/AuthActions'

class AppNav extends React.Component {
  constructor(props){
    super(props)

    this.authActions = new AuthActions()
  }

  openDrawer = (e) => {
    this.props.dispatch(AppActions.openDrawer())
  }

  logOut = (e) => {
    this.props.dispatch(this.authActions.logout())
  }

  render(){
    return (
      <AppBar
        title={<span>File Storage</span>}
        iconElementLeft={
          <IconButton>
            <Menu onClick={this.openDrawer} />
          </IconButton>
        }
        iconElementRight={
          <FlatButton label="Log out" onClick={this.logOut} />
        }
      />
    )
  }
}


const connected = connect((s) => {return {}})(AppNav)
export {connected as AppNav}
