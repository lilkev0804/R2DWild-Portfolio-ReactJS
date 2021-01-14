import React from 'react';
import "./navbar.css";


class Navbar extends React.Component {
    listener = null;
    state = {
      nav:false
    }
    componentDidMount() {
       window.addEventListener("scroll", this.handleScroll);
       const navLinks = document.querySelectorAll('.nav-link')
       const navLink = navLinks.forEach(link => {
         link.addEventListener('click', function(){
           if(this.innerHTML === "Wilders"){
            console.log('wilders')
           }else if(this.innerHTML === "Projects"){
             console.log('projects')
          }else{
            console.log('staff')
          }
         })
       })
       return navLink
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
        {/* return <div className="Nav"> */}
        <ul>
            <li className="nav-link">Wilders</li>
            <li className="nav-link">Projects</li>
            <li className="nav-link">Staff WCS</li>
        </ul>
  
    </div>
    }
  }

export default Navbar;