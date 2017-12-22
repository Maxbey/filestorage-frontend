import React, { Component } from 'react';

import { SignupForm } from '../components/forms/SignupForm'
import {Row, Col} from 'react-grid-system'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'

const linkContainerStyle = {
    marginTop: '20px'
}

export class SignupView extends Component {
  render() {
    return (
      <Row style={{height: '90%'}} align="center">
        <Col offset={{md: 4.5}} style={{'padding':'10px'}} md={3}>
          <SignupForm/>
          <FlatButton label="Already have an account"
            secondary={true} fullWidth={true} style={linkContainerStyle}
            containerElement={<Link to='/login/' />}
          />
        </Col>
      </Row>
    )
  }
}
