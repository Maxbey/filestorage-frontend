import React from 'react'
import { Link } from 'react-router-dom'

import List, { ListItem } from 'material-ui/List'
import Attachment from 'material-ui/svg-icons/file/attachment'

export class FilesList extends React.Component {
  renderFiles(files) {
    return files.map((file, index) => (
      <ListItem
        primaryText={file.name} key={index}
        leftIcon={<Attachment />}
        containerElement={<Link to={`/files/${file.id}`} />}
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
