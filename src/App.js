import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './component/DisplayComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             High order component example.
          </p>
          
        </header>
        <Display />
      </div>
    );
  }
}

export default App;
