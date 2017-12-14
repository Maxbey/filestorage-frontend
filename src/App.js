import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom';

import { store } from './middleware/store'
import { history } from './middleware/history';

import { LoginView } from './views/LoginView'
import { SignupView } from './views/SignupView'
import { DashboardView } from './views/DashboardView'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div id="View-container">
            <Route exact path="/" component={DashboardView} />
            <Route path="/login/" component={LoginView} />
            <Route path="/signup/" component={SignupView} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
