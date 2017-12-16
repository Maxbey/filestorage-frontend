import React, { Component } from 'react';

import { SignupForm } from '../components/forms/SignupForm'
import {Row, Col} from 'react-grid-system'

export class SignupView extends Component {
  render() {
    return (
      <Row style={{height: '90%'}} align="center">
        <Col offset={{md: 4.5}} style={{'padding':'10px'}} md={3}>
          <SignupForm/>
        </Col>
      </Row>
    )
  }
}
