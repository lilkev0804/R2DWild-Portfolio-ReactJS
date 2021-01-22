import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './Footer/footer';
import Hero from './hero/hero';
import Staff from './staff/staff';
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
        <Staff></Staff>
        <Footer></Footer>
      </div>
      
    );
  }
}

export default App;

