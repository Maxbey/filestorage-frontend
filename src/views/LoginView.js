import React, { Component } from 'react';

import { FormLayout } from '../components/layouts/FormLayout';
import { LoginForm } from '../components/forms/LoginForm';

export class LoginView extends Component {
  render() {
    return (
      <FormLayout>
        <LoginForm/>
      </FormLayout>
    );
  }
}
