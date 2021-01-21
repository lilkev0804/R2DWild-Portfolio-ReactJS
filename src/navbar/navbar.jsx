import React from 'react';
import "./navbar.css";


class Navbar extends React.Component {
    listener = null;
    state = {
      nav:false
    }
    componentDidMount() {
       window.addEventListener("scroll", this.handleScroll);
       
     }
     componentWillUnmount() {
        window.removeEventListener('scroll');
      }
     handleScroll= () => {
         const hero = document.querySelector('.hero-animation').offsetHeight
         if (window.pageYOffset > hero) {
           if(!this.state.nav){
             this.setState({ nav: true });
           }
       }else{
           if(this.state.nav){
             this.setState({ nav: false });
           }
       }
     }



     render(){
        return <div className={`Nav ${this.state.nav && ('Nav__black' || 'Nav__white')}`}>
        <ul>
            <li className="nav-link">Profils</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Staff WCS</li>
        </ul>
  
    </div>
    }
  }

export default Navbar;