import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Card, { CardContent, CardHeader } from 'material-ui/Card';
import { AuthActions } from '../../actions/AuthActions';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.authActions = new AuthActions();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
    delete this.props.errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;
    dispatch(this.authActions.login(email, password));
  }

  getFieldError(fieldName){
    if (this.props.errors){
      return this.props.errors[fieldName].error
    }
    else
      return false;
  }

  getFieldHelper(fieldName){
    if (this.props.errors){
      return this.props.errors[fieldName].helper
    }
    else
      return false;
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
    const helper = state.loginReducer.error;
    if (helper){
      return {
        'errors': {
          'email': {
            'error': true,
            'helper': helper
          }
        }
      }
    }

    return {};

}

const connectedLoginView = connect(mapStateToProps)(LoginForm);
export { connectedLoginView as LoginForm };
