import React, {Component} from 'react';
import './projects.css';


class Projects extends Component{
    componentDidMount(){
          const nameProject = document.querySelectorAll('.name-projects')
          const projects = nameProject.forEach(project => {
            project.addEventListener('mouseenter', function(){
                const imgProject = document.querySelector('.img-project')
                    if(this.innerHTML === "CodeMeMore"){
                        console.log('1')
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "red"
                    }else if(this.innerHTML === "PlayAgain"){
                        console.log('2')
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "orange"
                    }else{
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "navy"
                    }
            })
            project.addEventListener('mouseleave', function(){
                const imgProject = document.querySelector('.img-project')
                    if(this.innerHTML === "CodeMeMore"){
                        console.log('-1')
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "red"
                    }else if(this.innerHTML === "PlayAgain"){
                        console.log('-2')
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "orange"
                    }else{
                        imgProject.classList.toggle('invisible')
                        imgProject.style.backgroundColor = "navy"
                    }
            })
        })
        return projects
    }
    // componentWillUnmount(){
    //     const nameProject = document.querySelectorAll('.name-projects')
    //     const projects = nameProject.forEach(project => {
    //         project.addEventListener('mouseLeave', function(){
    //             const imgProject = document.querySelector('.img-project')
    //            if(this.innerHTML === "CodeMeMore" && imgProject.className.includes('invisible')){
    //                imgProject.classList.toggle('visible')
    //            }else if(this.innerHTML === "PlayAgain"){
    //                console.log('PlayAgain')
    //            }else{
    //                console.log('Les Futuristes')
    //            }
    //       })
    //     })
    //     return projects
    // }
    
    render() {
      return (
       <div className="general-container">
            <div className="container-projects">
               <div className="all-projects">
                   <div className="img-project invisible "></div>
               <p className="name-projects cmm">CodeMeMore</p>
                <p className="name-projects">PlayAgain</p>
                <p className="name-projects">Les Futuristes</p>
               </div>
        </div>
       </div>
      );
    }
  }
  
  export default Projects;