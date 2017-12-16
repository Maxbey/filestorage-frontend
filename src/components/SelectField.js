
import React, { Component } from 'react'
import SuperSelectField from 'material-ui-superselectfield'
import Chip from 'material-ui/Chip/Chip'

const containerStyle = {
  paddingTop: 20,
  paddingBottom: 0,
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}

export class SelectField extends Component {
  state = {
    model: []
  }

  handleSelection = (values, name) => this.setState({ model: values })

  handleCustomDisplaySelections = name => values =>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {values.map((value, index) =>
        <Chip key={index} style={{ margin: 5 }} onRequestDelete={this.onRequestDelete(index, name)}>
          {value.label}
        </Chip>
      )}
    </div>

  onRequestDelete = (key, name) => event => {
    this.setState({ model: this.state.model.filter((v, i) => i !== key) })
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  render() {
    const dataSourceNodes = this.props.dataSource.map((item) => (
      <div key={item.id} value={item.id}
       label={item[this.props.labelKey]}>{item[this.props.labelKey]}
      </div>
    ))

    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <SuperSelectField
            name='state32'
            multiple
            floatingLabel={this.props.floatingLabel}
            hintTextAutocomplete={this.props.hintTextAutocomplete}
            onChange={this.handleSelection}
            value={this.state.model}
            style={{ width: '100%'}}
            showAutocompleteThreshold={1}
            selectionsRenderer={this.handleCustomDisplaySelections()}
          >
            {dataSourceNodes}
          </SuperSelectField>
        </div>
      </div>
    )
  }
}
