import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import DuplicateCard from './portfolio/duplicate';
import Projects from './projects/Projects'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="container-card">
            {DuplicateCard}
        </div>
        <Projects></Projects>
      </div>
      
    );
  }
}

export default App;

