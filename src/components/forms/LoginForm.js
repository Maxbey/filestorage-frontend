import React, { Component } from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Card, { CardContent, CardHeader } from 'material-ui/Card';

export class LoginForm extends Component {
  render() {
    return (
      <div className="Input-container">
      <Card>
        <CardHeader
            title="Log In"
          />
        <CardContent>
          <div className="Input-container">
            <TextField fullWidth={ true } label='Email'/>
          </div>
          <div className="Input-container">
            <TextField fullWidth={ true } label='Password'/>
          </div>
          <div className="Input-container">
            <Button className="Submit-button" raised color="primary">
              Log In
            </Button>
          </div>
        </CardContent>
      </Card>
      </div>
    );
  }
}
