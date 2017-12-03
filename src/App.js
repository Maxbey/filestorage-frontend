import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store } from './middleware/store'

import { LoginView } from './views/LoginView'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginView/>
      </Provider>
    );
  }
}

export default App;
