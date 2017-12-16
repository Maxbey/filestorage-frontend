import React from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Card, { CardText, CardHeader } from 'material-ui/Card';
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
      <Card>
        <CardHeader title="File Storage"></CardHeader>
        <CardText>
          <form>
              <TextField
                errorText={ this.getFieldHelper('email') }
                name='email'
                value={email}
                fullWidth={ true }
                floatingLabelText='Email'
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
                label="Log In"
              />
          </form>
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
    return {...state.loginReducer};

}

const connectedLoginForm = connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm };
