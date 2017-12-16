import React from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

import { AppActions } from '../../actions/AppActions'

class AppNav extends React.Component {
  constructor(){
    super()

    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer(e){
    this.props.dispatch(AppActions.openDrawer());
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
        iconElementRight={<FlatButton label="Log out" />}
      />
    )
  }
}


const connected = connect((s) => {return {}})(AppNav)
export {connected as AppNav}
