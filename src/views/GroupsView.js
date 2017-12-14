import React, { Component } from 'react'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { DashboardView } from './DashboardView'
import { GroupsList } from '../components/GroupsList'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'


export class GroupsView extends Component {
  render() {
    return (
      <DashboardView>
        <Grid justify='center' xs={12} alignItems='center' container className="Form-container">
          <Grid item lg={4}>
            <GroupsList/>
          </Grid>
        </Grid>
        <Button style={{float: 'right', 'margin-right': '20px'}}
          fab color="primary" aria-label="add" component={Link} to='/group/'
        >
          <AddIcon />
        </Button>
      </DashboardView>
    );
  }
}
