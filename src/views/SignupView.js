import React, { Component } from 'react';

import { FormLayout } from '../components/layouts/FormLayout';
import { SignupForm } from '../components/forms/SignupForm';
import { AuthView } from '../views/AuthView';

export class SignupView extends Component {
  render() {
    return (
      <AuthView>
        <FormLayout>
          <SignupForm/>
        </FormLayout>
      </AuthView>
    );
  }
}
