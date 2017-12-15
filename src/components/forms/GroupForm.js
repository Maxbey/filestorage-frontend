import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import { GroupActions } from '../../actions/GroupActions'
import { UserActions } from '../../actions/UserActions'
import { FileActions } from '../../actions/FileActions'
import { AbstractForm } from './AbstractForm'

import Input, { InputLabel } from 'material-ui/Input'

class GroupForm extends AbstractForm {
  constructor(props){
    super(props)

    this.groupActions = new GroupActions()
    this.userActions = new UserActions()
    this.fileActions = new FileActions()

    this.props.dispatch(this.userActions.getUsers(''))
    this.props.dispatch(this.fileActions.getFiles())

    this.state = {
      name: '',
      users: [],
      files: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, users, files } = this.state;
    const { dispatch } = this.props;

    dispatch(this.groupActions.createGroup(name, users, files));
  }

  render() {
    return (
      <div className="Input-container">
          <form>
            <div className="Input-container">
              <TextField
                error={ this.getFieldError('name') }
                helperText={ this.getFieldHelper('name') }
                name='name'
                value={this.state.email}
                fullWidth={ true }
                label='Group name'
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
                Create
              </Button>
            </div>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      ...state.groupReducer,
      ...state.fileReducer,
      ...state.userReducer
    };

}

const connected = connect(mapStateToProps)(GroupForm);
export { connected as GroupForm };
