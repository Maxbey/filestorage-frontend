import React from 'react';

export class AbstractForm extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })

    if (this.props.validationErrors){
      if (this.props.validationErrors.hasOwnProperty(name))
        delete this.props.validationErrors[name]
    }
  }

  getFieldError(fieldName){
    if (this.props.validationErrors){
      return this.props.validationErrors.hasOwnProperty(fieldName)
    }

    return false
  }

  getFieldHelper(fieldName){
    if (this.props.validationErrors){
      return this.props.validationErrors[fieldName]
    }
    else
      return false;
  }
}
