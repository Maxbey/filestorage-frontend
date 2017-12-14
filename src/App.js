import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom';

import { store } from './middleware/store'
import { history } from './middleware/history';

import { LoginView } from './views/LoginView'
import { SignupView } from './views/SignupView'
import { UploadView } from './views/UploadView'

import 'react-dropzone-component/styles/filepicker.css'
import 'dropzone/dist/min/dropzone.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div id="View-container">
            <Route path="/login/" component={LoginView} />
            <Route path="/signup/" component={SignupView} />
            <Route path="/upload/" component={UploadView} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
