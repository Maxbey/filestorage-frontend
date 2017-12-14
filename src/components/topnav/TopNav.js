import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

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

function TopNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            File Storage
          </Typography>
          <Button component={Link} to='/login/'>Log In</Button>
          <Button component={Link} to='/signup/'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styled = withStyles(styles)(TopNav)

export {styled as TopNav}
