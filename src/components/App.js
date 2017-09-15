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
          <h3> Some queries will return no results, but keep trying.</h3>
          
            <h3>An interesting one is:</h3>

            <ul id="startList">
              <li>Rover: Curiosity</li>
              <li>Camera Type: NAVCAM</li>
              <li>Martian Sol: 1587</li>
            </ul>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
