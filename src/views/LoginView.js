import React, { Component } from 'react'
import { LoginForm } from '../components/forms/LoginForm'

import {Row, Col} from 'react-grid-system'

export class LoginView extends Component {
  render() {
    return (
      <Row style={{height: '90%'}} align="center">
        <Col offset={{md: 4.5}} style={{'padding':'10px'}} md={3}>
          <LoginForm/>
        </Col>
      </Row>
    )
  }
}
