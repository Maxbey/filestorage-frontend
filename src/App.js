import fetchIntercept from 'fetch-intercept'
import React, { Component } from 'react'
import { Container } from 'react-grid-system'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import { store } from './middleware/store'
import { history } from './middleware/history'

import { appConfig } from './config';
import { LoginView } from './views/LoginView'
import { SignupView } from './views/SignupView'
import { UploadView } from './views/UploadView'
import { FilesView } from './views/FilesView'
import { GroupsView } from './views/GroupsView'
import { CreateGroupView } from './views/CreateGroupView'
import { GroupDetailView } from './views/GroupDetailView'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-dropzone-component/styles/filepicker.css'
import 'dropzone/dist/min/dropzone.min.css'
import './App.css'

fetchIntercept.register({
    request: function (url, config) {
        const fullUrl = appConfig.API_HOST + url
        const authToken = localStorage.getItem('apiToken')

        if (authToken){
          if (!config.headers)
            config.headers = {}

          config.headers['Authorization'] = ('Token ' + authToken)
        }

        return [fullUrl, config]
    },
    response: function (response) {
        if (response.status === 403){
          history.push('/login/')
        }

        return response;
    }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history}>
            <Container id="View-container" fluid>
              <Route exact path="/" component={FilesView} />
              <Route path="/login/" component={LoginView} />
              <Route path="/signup/" component={SignupView} />
              <Route path="/upload/" component={UploadView} />
              <Route exact path="/groups/:id/" component={GroupDetailView} />
              <Route exact path="/groups/" component={GroupsView} />
              <Route path="/group/" component={CreateGroupView} />
            </Container>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
