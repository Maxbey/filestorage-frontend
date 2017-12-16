import React from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Card, { CardText, CardHeader } from 'material-ui/Card'
import { AuthActions } from '../../actions/AuthActions'
import { AbstractForm } from './AbstractForm'

class SignupForm extends AbstractForm {
  constructor(props){
    super(props)

    this.authActions = new AuthActions()

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, firstName, lastName, password } = this.state
    const { dispatch } = this.props
    dispatch(this.authActions.register(email, password, firstName, lastName))
  }

  render() {
    const { email, password, firstName, lastName } = this.state

    return (
      <Card>
        <CardHeader
            title="Sign Up"
          />
        <CardText>
          <TextField
            errorText={ this.getFieldHelper('email') }
            name='email'
            value={email}
            fullWidth={ true }
            floatingLabelText='Email'
            onChange={this.handleChange}
          />
          <TextField
            errorText={ this.getFieldHelper('firstName') }
            name='firstName'
            value={firstName}
            fullWidth={ true }
            floatingLabelText='First name'
            onChange={this.handleChange}
          />
          <TextField
            errorText={ this.getFieldHelper('lastName') }
            name='lastName'
            value={lastName}
            fullWidth={ true }
            floatingLabelText='Last name'
            onChange={this.handleChange}
          />
          <TextField
            name='password'
            value={password}
            fullWidth={ true }
            floatingLabelText='Password'
            onChange={this.handleChange}
            errorText={ this.getFieldHelper('password') }
            type="password"
          />
          <RaisedButton
            className="Submit-button"
            primary
            onClick={this.handleSubmit}
            label="Sign Up"
          />
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
    return {...state.registerReducer}

}

const connectedSignupForm = connect(mapStateToProps)(SignupForm)
export { connectedSignupForm as SignupForm }
