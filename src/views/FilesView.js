import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-grid-system'

import Subheader from 'material-ui/Subheader'

import { FileActions } from '../actions/FileActions'

import { DashboardView } from './DashboardView'
import { FilesList } from '../components/FilesList'


class FilesView extends Component {
  constructor(props){
    super(props)

    this.fileActions = new FileActions()

    this.props.dispatch(this.fileActions.getFiles())
  }

  renderFiles(){
    const files = this.props.files

    if (!files){
      return
    }

    return <FilesList files={files}/>
  }

  render() {


    return (
      <DashboardView>
        <Row style={{height: '90%'}} align="center">
          <Col offset={{md: 4}} md={4}>
            <Subheader style={{fontSize: '32px'}}>Available files</Subheader>
            {this.renderFiles()}
          </Col>
        </Row>
      </DashboardView>
    );
  }
}

function mapStateToProps(state) {
    return {...state.fileReducer}
}

const connected = connect(mapStateToProps)(FilesView)
export {connected as FilesView}
