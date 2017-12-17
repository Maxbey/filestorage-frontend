import React from 'react'
import { connect } from 'react-redux'
import List, { ListItem } from 'material-ui/List'
import Attachment from 'material-ui/svg-icons/file/attachment'
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'

import { FileActions } from '../actions/FileActions'

class FilesList extends React.Component {
  constructor(props){
    super(props)

    this.fileActions = new FileActions()

    this.props.dispatch(this.fileActions.getFiles())
  }

  deleteFile = (id) => event => {
    this.props.dispatch(this.fileActions.deleteFile(id))
  }

  renderFiles(filesData) {
    return filesData.map((file, index) => (
      <ListItem
        primaryText={file.name} key={index}
        leftIcon={<Attachment />}
        rightIcon={<DeleteForever onClick={this.deleteFile(file.id)} />}
      />
    ))

}

  render(){
    return (
      <List>
        {this.renderFiles(this.props.files)}
      </List>
    )
  }
}

function mapStateToProps(state) {
    return {...state.fileReducer}
}

const connected = connect(mapStateToProps)(FilesList)
export {connected as FilesList}
