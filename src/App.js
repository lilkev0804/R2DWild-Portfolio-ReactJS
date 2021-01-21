import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import DuplicateCard from './portfolio/duplicate';


class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <div className="container-card">
            {DuplicateCard}
        </div>
      </div>
      
    );
  }
}

export default App;

