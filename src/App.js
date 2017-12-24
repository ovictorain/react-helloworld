import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Little',
  lastName: 'Victor'
};

const element = (
  <span>
    Hello, {formatName(user)}!
  </span>
);

class App extends Component {
  /**
   * use constructor
   */
  // constructor(firstName, lastName) {
  //   super();
  //
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

  /**
   * use method
   */
  get name() {
    return <span>Hello, {formatName(user)}!</span>
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {element}
            {/* {this.name} */}
        </p>
      </div>
    );
  }
}

export default App;
