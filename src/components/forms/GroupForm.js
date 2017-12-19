import React from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { UserActions } from '../../actions/UserActions'
import { FileActions } from '../../actions/FileActions'
import { GroupActions } from '../../actions/GroupActions'
import { AbstractForm } from './AbstractForm'

import { SelectField } from '../SelectField'

class GroupForm extends AbstractForm {
  constructor(props){
    super(props)

    this.userActions = new UserActions()
    this.fileActions = new FileActions()
    this.groupActions = new GroupActions()

    this.props.dispatch(this.userActions.getUsers(''))
    this.props.dispatch(this.fileActions.getFiles())

    if (this.props.instance){
      this.state = {
        name: this.props.group.name
      }
    }
    else {
      this.state = {
        name: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  makeSelectModels(items, labelAttr){
    return items.map((item) => {
      return {
        value: item,
        label: item[labelAttr]
      }
    })
  }

  componentDidMount(){
    const instance = this.props.instance

    if (instance){
      this.userSelect.state.model = this.makeSelectModels(
        instance.users, 'email'
      )
      this.fileSelect.state.model = this.makeSelectModels(
        instance.files, 'name'
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, users, files } = this.state
    const { dispatch, instance } = this.props

    let usersIds = this.userSelect.state.model.map((item) => item.value.id)
    let filesIds = this.fileSelect.state.model.map((item) => item.value.id)

    const toSubmit = {
      id: instance ? instance.id : null,
      name: this.state.name,
      users: usersIds,
      files: filesIds
    }

    switch (this.props.submitAction){
      case 'UPDATE':
        return dispatch(this.groupActions.updateGroup(toSubmit))
      case 'CREATE':
        return dispatch(this.groupActions.createGroup(toSubmit))
    }
  }

  render() {
    return (
      <div>
        <TextField
          errorText={ this.getFieldHelper('name') }
          name='name'
          value={this.state.name}
          fullWidth={ true }
          floatingLabelText='Group name'
          onChange={this.handleChange}
        />

        <SelectField
         dataSource={this.props.users}
         labelKey='email'
         floatingLabel='Share with'
         hintTextAutocomplete='Search user by e-mail'
         onRef={ref => (this.userSelect = ref)}
         />

         <SelectField
          dataSource={this.props.files}
          labelKey='name'
          floatingLabel='Share files'
          hintTextAutocomplete='Search by name'
          onRef={ref => (this.fileSelect = ref)}
          />

        <RaisedButton
          className="Submit-button"
          primary
          onClick={this.handleSubmit}
          label={this.props.submitLabel}
        />
      </div>
    )
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
