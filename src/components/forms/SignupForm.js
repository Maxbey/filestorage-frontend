import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import Card, { CardContent, CardHeader } from 'material-ui/Card'
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
      <div className="Input-container">
      <Card>
        <CardHeader
            title="Sign Up"
          />
        <CardContent>
          <form>
            <div className="Input-container">
              <TextField
                error={ this.getFieldError('email') }
                helperText={ this.getFieldHelper('email') }
                name='email'
                value={email}
                fullWidth={ true }
                label='Email'
                onChange={this.handleChange}
              />
            </div>
            <div className="Input-container">
              <TextField
                error={ this.getFieldError('firstName') }
                helperText={ this.getFieldHelper('firstName') }
                name='firstName'
                value={firstName}
                fullWidth={ true }
                label='First name'
                onChange={this.handleChange}
              />
            </div>
            <div className="Input-container">
              <TextField
                error={ this.getFieldError('lastName') }
                helperText={ this.getFieldHelper('lastName') }
                name='lastName'
                value={lastName}
                fullWidth={ true }
                label='Last name'
                onChange={this.handleChange}
              />
            </div>
            <div className="Input-container">
              <TextField
                name='password'
                value={password}
                fullWidth={ true }
                label='Password'
                onChange={this.handleChange}
                error={ this.getFieldError('password') }
                helperText={ this.getFieldHelper('password') }
                type="password"
              />
            </div>
            <div className="Input-container">
              <Button
                className="Submit-button"
                raised
                color="primary"
                onClick={this.handleSubmit}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {...state.registerReducer}

}

const connectedSignupForm = connect(mapStateToProps)(SignupForm)
export { connectedSignupForm as SignupForm }
