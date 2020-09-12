import React, { Component } from 'react';
import {addTodos as AddTodos} from './components/addTodos/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Add Todos</h1>
        </header>
        <div className='App-Content'>
          <AddTodos />
        </div>
      </div>
    );
  }
}

export default App;
