import React, { Component } from 'react'
import { DashboardView } from './DashboardView'
import { UploadComponent } from '../components/forms/UploadComponent'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export class UploadView extends Component {
  render() {
    return (
      <DashboardView>
        <Grid justify='center' xs={12} alignItems='center' container className="Form-container">
        <Grid item lg={6}>
          <UploadComponent/>
        </Grid>
        </Grid>
      </DashboardView>
    );
  }
}
