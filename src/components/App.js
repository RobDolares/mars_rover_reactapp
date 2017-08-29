import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import GetImageForm from './GetImageForm'

class App extends Component {

  render() {
    return (
      <div className="App">
          <img className="App-logo" src={logo} alt="ReactJS Logo"/>
          <h1> Mars Rover Image Application</h1>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
