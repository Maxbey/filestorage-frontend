import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

import { appConfig } from '../../config';

export class UploadComponent extends React.Component {
  constructor(props){
    super(props)

    this.componentConfig = {
        iconFiletypes: ['.txt'],
        showFiletypeIcon: true,
        postUrl: appConfig.API_HOST + '/file/'
    }
    this.djsConfig = {
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('apiToken')
      }
    }
  }

  render(){
    return (
      <DropzoneComponent
        config={this.componentConfig}
        djsConfig={this.djsConfig}
      />
    )
  }
}
