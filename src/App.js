import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import DuplicateCard from './portfolio/duplicate';
import Projects from './projects/projects'
import Staff from './staff/staff'


class App extends Component{

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <ul>
              <li className="nav-link">Wilders</li>
              <li className="nav-link">Projects</li>
              <li className="nav-link">Staff WCS</li>
          </ul>
        </div>
              <Navbar></Navbar>
              <Hero></Hero>
        <div className="container-card">
            {DuplicateCard}
        </div>
        <Projects></Projects>
        <Staff></Staff>
      </div>
      
    );
  }
}

export default App;

