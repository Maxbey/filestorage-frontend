import React, { Component } from 'react'
import { DashboardView } from './DashboardView'
import { FilesList } from '../components/FilesList'
import Grid from 'material-ui/Grid';

export class FilesView extends Component {
  render() {
    return (
      <DashboardView>
        <Grid justify='center' xs={12} alignItems='center' container className="Form-container">
          <Grid item lg={4}>
            <FilesList/>
          </Grid>
        </Grid>
      </DashboardView>
    );
  }
}
