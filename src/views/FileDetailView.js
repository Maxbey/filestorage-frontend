import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-grid-system'

import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'

import { DashboardView } from './DashboardView'
import { FileActions } from '../actions/FileActions'
import { UserActions } from '../actions/UserActions'

import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import Favorite from 'material-ui/svg-icons/action/favorite'


class FileDetailView extends Component {
  constructor(props){
    super(props)
    this.fileActions = new FileActions()
    this.userActions = new UserActions()

    this.props.dispatch(this.fileActions.getFile(
      this.props.match.params.id
    ))
    this.props.dispatch(this.userActions.getCurrent())
  }

  deleteFile = () => {
    this.props.dispatch(
      this.fileActions.deleteFile(this.props.file.id)
    )
  }

  isUserLiked(user, likes){
    for(var like of likes){
      if (like.user.id === user.id)
        return true
    }

    return false
  }

  handleLike = (event) => {
    const user = this.props.user
    const file = this.props.file

    if (this.isUserLiked(user, file.likes))
      this.props.dispatch(this.fileActions.unlikeFile(file.id))
    else
      this.props.dispatch(this.fileActions.likeFile(file.id))
  }

  renderLikeBadge(file){
    const user = this.props.user

    if (!user){
      return
    }

    let primary = true;
    let secondary = false;

    if (this.isUserLiked(user, file.likes)){
      primary = !primary
      secondary = !secondary
    }

    return (
      <Badge badgeStyle={{top: 12, right: 12}} style={{float: 'right'}}
        badgeContent={file.likes.length}
        primary={primary}
        secondary={secondary}
      >
        <IconButton onClick={this.handleLike}>
          <Favorite />
        </IconButton>
      </Badge>
    )
  }

  renderDeleteButton(){
    if(this.props.file.user.id === this.props.user.id){
      return (
        <RaisedButton style={{marginTop: '20px'}}
         label="Delete" secondary fullWidth onClick={this.deleteFile}
        />
      )
    }

  return
  }

  renderDetails(){
    let file = this.props.file

    if (!file){
      return
    }

    return (
      <div>
        {this.renderLikeBadge(file)}
        <TextField
          disabled={true}
          defaultValue={file.name}
          fullWidth
          floatingLabelText='File name'
        />
        {this.renderDeleteButton()}
      </div>
    )
  }

  render() {

    return (
      <DashboardView>
        <Row style={{height: '85%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            {this.renderDetails()}
          </Col>
        </Row>
      </DashboardView>
    )
  }
}


function mapStateToProps(store, props) {
    console.log(store.fileReducer)
    return {
      ...store.fileReducer,
      ...store.userReducer
    }
}

const connected = connect(mapStateToProps)(FileDetailView)
export { connected as FileDetailView }
