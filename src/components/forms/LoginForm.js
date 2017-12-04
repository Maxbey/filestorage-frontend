import React from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { AuthActions } from '../../actions/AuthActions';
import { AbstractForm } from './AbstractForm';

class LoginForm extends AbstractForm {
  constructor(props){
    super(props);

    this.authActions = new AuthActions();

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;
    dispatch(this.authActions.login(email, password));
  }

  render() {
    const { email, password} = this.state

    return (
      <div className="Input-container">
      <Card>
        <CardHeader
            title="Log In"
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
                Log In
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
    return {...state.loginReducer};

}

const connectedLoginForm = connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm };
