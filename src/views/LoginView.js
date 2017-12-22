import React, { Component } from 'react'
import { LoginForm } from '../components/forms/LoginForm'

import FlatButton from 'material-ui/FlatButton'

import {Row, Col} from 'react-grid-system'
import { Link } from 'react-router-dom'

const linkContainerStyle = {
    marginTop: '20px'
}

export class LoginView extends Component {
  render() {
    return (
      <Row style={{height: '90%'}} align="center">
        <Col offset={{md: 4.5}} style={{'padding':'10px'}} md={3}>
          <LoginForm/>
          <FlatButton label="Create an account"
            secondary={true} fullWidth={true} style={linkContainerStyle}
            containerElement={<Link to='/signup/' />}
          />
        </Col>
      </Row>
    )
  }
}
