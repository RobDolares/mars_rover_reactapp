import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import GetImageForm from './GetImageForm'

class App extends Component {

  render() {
    return (
      <div>
        <img className="App-logo" src={logo} alt="ReactJS Logo"/>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
