import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import './App.css';

import { FormLayout } from './components/layouts/FormLayout';
import { LoginForm } from './components/forms/LoginForm';

class App extends Component {
  render() {
    return (
      <FormLayout>
        <LoginForm/>
      </FormLayout>
    );
  }
}

export default App;
