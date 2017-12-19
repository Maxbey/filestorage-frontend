import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-grid-system'

import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Paper from 'material-ui/Paper'

import {List, ListItem} from 'material-ui/List'

import { DashboardView } from './DashboardView'
import { FileActions } from '../actions/FileActions'
import { UserActions } from '../actions/UserActions'

import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import Favorite from 'material-ui/svg-icons/action/favorite'
import Comment from 'material-ui/svg-icons/communication/comment'
import Delete from 'material-ui/svg-icons/action/delete'


class FileDetailView extends Component {
  constructor(props){
    super(props)
    this.fileActions = new FileActions()
    this.userActions = new UserActions()

    this.props.dispatch(this.fileActions.getFile(
      this.props.match.params.id
    ))
    this.props.dispatch(this.userActions.getCurrent())

    this.state = {
      commentWindow: false,
      comment: ''
    }
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

  openCommentWindow = () => {
    this.setState({
      commentWindow: true
    })
  }

  closeCommentWindow = () => {
    this.setState({
      commentWindow: false
    })
  }

  handleCommentTyping = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  submitComment = (e) => {
    this.props.dispatch(this.fileActions.createComment(
      this.state.comment,
      this.props.match.params.id
    ))
    this.setState({comment: ''})

    this.closeCommentWindow()
  }

  deleteComment = (commentId) => event => {
    this.props.dispatch(this.fileActions.deleteComment(
      commentId,
      this.props.match.params.id
    ))
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

    if (!this.props.user){
      return
    }

    return (
      <div>
        <div>
          {this.renderLikeBadge(file)}
          <TextField
            disabled={true}
            defaultValue={file.name}
            fullWidth
            floatingLabelText='File name'
            name='comment'
          />
          {this.renderDeleteButton()}
        </div>
        <div style={{padding: 10}}>
          <Paper zDepth={1} rounded={false}>
            <List>
              <Subheader>Comments</Subheader>
              {file.comments.map((comment, index) => (
                <ListItem
                  key={index}
                  primaryText={comment.user.email}
                  secondaryText={
                    <p>
                      {comment.content}
                    </p>
                  }
                  rightIconButton={
                    this.props.user.id === comment.user.id ?
                    <Delete onClick={this.deleteComment(comment.id)}/>
                    : <span></span>
                  }
                />
              ))}
            </List>
          </Paper>
        </div>
      </div>
    )
  }

  renderCommentWindow(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.closeCommentWindow}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.submitComment}
        disabled={!this.state.comment.length}
      />,
    ]

    return (
      <Dialog
          title="Submit comment"
          modal={false}
          open={this.state.commentWindow}
          actions={actions}
        >
        <TextField
          floatingLabelText="Comment"
          fullWidth
          multiLine
          rows={3}
          onChange={this.handleCommentTyping}
          name='comment'
        />
      </Dialog>
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
        <Row>
          <Col style={{padding: 10}} offset={{md: 11}} md={1}>
            <FloatingActionButton style={{float: 'right'}}
              onClick={this.openCommentWindow}
            >
              <Comment/>
            </FloatingActionButton>
          </Col>
        </Row>
        {this.renderCommentWindow()}
      </DashboardView>
    )
  }
}


function mapStateToProps(store, props) {
    return {
      ...store.fileReducer,
      ...store.userReducer
    }
}

const connected = connect(mapStateToProps)(FileDetailView)
export { connected as FileDetailView }
