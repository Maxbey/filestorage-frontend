import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

export class FormLayout extends Component {
  render() {
    return (
      <Grid justify='center' xs={12} alignItems='center' container className="Form-container">
        <Grid item lg={3}>
          <Grid
            container
            alignItems='center'
            direction='column'
            justify='space-between'
            className="Form-container"
          >
            { this.props.children }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
