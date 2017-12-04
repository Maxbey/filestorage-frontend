import React, { Component } from 'react';

import { FormLayout } from '../components/layouts/FormLayout';
import { SignupForm } from '../components/forms/SignupForm';

export class SignupView extends Component {
  render() {
    return (
      <FormLayout>
        <SignupForm/>
      </FormLayout>
    );
  }
}
