import React, {useState, useEffect} from 'react'
import './navbar.css'

const Navbar = () => {
  const [show , handleShow] = useState(false)

    // scroll navbar effect 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const heightHero= document.querySelector(".hero-animation").offsetHeight
            const heightProject= document.querySelector(".container-project").offsetTop
            const heightContact = document.querySelector('.section-staff').offsetTop
            const profils = document.querySelector('#link-profil')
            const projet = document.querySelector('#link-projet')
            const contact = document.querySelector('#link-contact')
            if (window.scrollY > heightHero && window.scrollY < heightProject){
                handleShow(true)
                profils.style.color = "white"
                projet.style.color = "#F76C6C"
                contact.style.color = "#F76C6C"
            }else if(window.scrollY > heightProject && window.scrollY < heightContact){
                handleShow(true)
                profils.style.color = "#F76C6C"
                contact.style.color = "#F76C6C"
                projet.style.color = "white"
            }else if(window.scrollY > heightContact - 100){
                handleShow(true)
                contact.style.color="white"
                profils.style.color = "#F76C6C"
                projet.style.color = "#F76C6C"
            }else {
              handleShow(false)
              contact.style.color="#F76C6C"
                profils.style.color = "#F76C6C"
                projet.style.color = "#F76C6C"
            }
              
        })

    }, [])

  return (
    <div className={`navbar ${show && "navbar-black"}`}>
        <ul>
          <li id="link-profil">Profils</li>
          <li id="link-projet">Projets</li>
          <li id="link-contact">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
