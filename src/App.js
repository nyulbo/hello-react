import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import MyNameFnc from './MyNameFnc';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>gogogo</p>
        <MyName  />
        <MyNameFnc name="Fnc 이름ggg" />
        <Counter />
      </div>
    );
  }
}

export default App;
