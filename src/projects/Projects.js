import React from 'react'
import './Project.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'img/project-img/CodeMeMore.png',
    'img/project-img/PlayAgain.png',
    'img/project-img/lesfuturistes.png'
  ];

const properties = {
    duration : 5000,
    transitionDuration: 900,
    arrows: false,
    indicators: true
}

const logos = [
    'img/logo/css.svg',
    'img/logo/js.svg',
    'img/logo/html.svg',
    'img/logo/git.svg'
]


const Projects = () => {
    return (
        <div className="project-container">
        <div className="project-text">
            <h2>Les projets</h2>
            <p>Durée de la réalisation du projet : 2 semaines</p>
            <div className="logo-container">
                {logos.map((logo, index) => 
                    <img alt="logo" className="logo" src={logo}></img>
                )}
            </div>
        </div>
        <div className="diapo-contain">
        <Slide {...properties}>
          <div className="each-slide">
            <img className="img" alt="project" src={slideImages[0]}/>
          </div>
          <div className="each-slide">
            <img className="img" alt="project" src={slideImages[1]}/>
          </div>
          <div className="each-slide">
            <img className="img" alt="project" src={slideImages[2]}/>
          </div>
        </Slide>
        </div>
        </div>
    )
}

export default Projects