import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.css';
import {Tabs} from './Tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
      </div>
    );
  }
}

export default App;
