import React from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { AppActions } from '../../actions/AppActions'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class AppNav extends React.Component {
  constructor(){
    super()

    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer(e){
    this.props.dispatch(AppActions.openDrawer());
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon onClick={this.openDrawer} />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              File Storage
            </Typography>
            <Button color="contrast">Log Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styled = withStyles(styles)(AppNav)
const connected = connect((s) => {return {}})(styled)

export {connected as AppNav}
