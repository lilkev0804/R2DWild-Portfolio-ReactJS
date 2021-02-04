import React from 'react'
import './Project.css'

const projets = [
    {
    name:"Play Again",
    members:["ABENZOAR Rachel", "CHEMIL Nassim", " FERNANDEZ Christelle", "JORLAND Joël", "LALLAU Marc ","PIRIOU Nicolas"],
    link: "https://nafaachemil.github.io/",
    img:"./img/project-img/playagain.png",
    class:'project-1'
    },
    {
    name:"Les Futuristes",
    members: ["LEMARIE Kevin","MAUDUIT Olivier", "MORLET Caroline", "SOUMIER Nicolas", "PRUVOST Ingrid", "ROBICHEZ Jérôme", "ROSIER Alexandre"],
    link: "https://nicobellick.github.io/projectFuturiste/fiche.html",
    img:"./img/project-img/lesfuturistes.png",
    class:'project-2'
    },
    {
    name:"Code Me More",
    members: ["SCHMITT Aurélien","SEGAULT Alexandre", "SOCHON Raphaelle", "SRNIC Orlando","TRAN Alain", "HERNANDEZ Yann", "DE SOUZA Samantha"],
    link:"https://gijix.github.io/CodeMeMore-project-1-Cocktail/",
    img:"./img/project-img/codememore.png",
    class:'project-3'
    }
]

const Project = () => { 


        return (<div className="container-project">
        <h2 className="title-section">les projets</h2>
                {projets.map((projet, index) => {
                    return <div  id={projet.class} className="project-element" key={index}>
                                <div className="visual-projet">
                                    <img className="img-project" alt={`Visuel du projet ${projet.name}`} src={projet.img}></img>
                                </div>
                              <div className="text-projet">
                                <h3 className="title-project">{projet.name}</h3> 
                                    <div className="member-container">
                                            {projet.members.map((member, index) => {
                                                return <p className="memberProject" key={index}>
                                                    {member}
                                                </p>
                                            })}
                                        </div>
                                    <a href={projet.link} className="discoverProject" target="blank">Découvrir</a>
                              </div>
                        </div>
                })}
        </div>
     )
}



export default Project