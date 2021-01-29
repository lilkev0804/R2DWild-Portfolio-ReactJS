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
        window.removeEventListener('scroll',this.exit);
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

     test = (event) => {

     }

     render(){
        return <div className={`Nav ${this.state.nav && ('Nav__black' || 'Nav__white')}`}>
        <ul>
            <li onClick={(event) => this.test(event)} className="nav-link firstlink">Profils</li>
            <li onClick={(event) => this.test(event)}  className="nav-link">Projets</li>
            <li onClick={(event) => this.test(event)}  className="nav-link">Contact WCS</li>
        </ul>
  
    </div>
    }
  }

export default Navbar;