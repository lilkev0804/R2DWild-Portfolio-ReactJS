import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './Footer/Footer.js';
import Hero from './hero/hero';
import Staff from './staff/staff';
import Project from './Project/Project';
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
        <Project></Project>
        <Staff></Staff>
        <Footer></Footer>
      </div>
      
    );
  }
}

export default App;

