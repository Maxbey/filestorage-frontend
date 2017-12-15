import React, { Component } from 'react';

import { FormLayout } from '../components/layouts/FormLayout';
import { GroupForm } from '../components/forms/GroupForm';
import { DashboardView } from '../views/DashboardView';

export class CreateGroupView extends Component {
  render() {
    return (
      <DashboardView>
        <FormLayout>
          <GroupForm/>
        </FormLayout>
      </DashboardView>
    );
  }
}
