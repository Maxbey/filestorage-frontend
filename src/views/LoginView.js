import React, { Component } from 'react';

import { FormLayout } from '../components/layouts/FormLayout';
import { LoginForm } from '../components/forms/LoginForm';
import { AuthView } from '../views/AuthView';

export class LoginView extends Component {
  render() {
    return (
      <AuthView>
        <FormLayout>
          <LoginForm/>
        </FormLayout>
      </AuthView>
    );
  }
}
