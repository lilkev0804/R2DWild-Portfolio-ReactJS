import React from 'react';
import "./card.css";



class Card extends React.Component{
    state = {
            show : "",
            unshow: "",
            email: {isToggleOn : true}
        }
    next  = (event) =>  {
     this.setState({
         show:"showBackcard",
         unshow:''
        })
    }
    back  = (event) =>  {
        this.setState({
            show:"invisible",
            unshow:"backFaceCard"
        })
    }
    emailPaste = (e) => {
        this.setState(email => ({
            isToggleOn : !email.isToggleOn
        }))
        const valueBtn = e.target.value
        console.log(valueBtn)
        let fullLink = document.createElement('input');
        document.body.appendChild(fullLink);
        fullLink.value = valueBtn
        fullLink.select();
        document.execCommand("copy");
        fullLink.remove();
    }


    render(){
        const {name, image,identity,workPlace1,workPlace2,workPlace3,beforeWcs1,linkedin,github,remote,internationalMobility,franceMobility} = this.props
    
        return <div  className={`card ${this.state.unshow} `}>
            <span className={`emailCopy ${this.state.isToggleOn ? "emailpaste" : 'invisible'}`}>Email copié</span>
                <div className="top-card">
                    <img className="img-card" alt={name} src={image} ></img>
                </div>
                <div className="identity">
                    <h2>{identity}</h2>
                    <p><i className="fas fa-map-pin"></i> {workPlace1}</p>
                </div>
                <div className="message">
                    <p className="expertise-element">Secteur d'expertise :</p>
                    <p className="myexpertise">{beforeWcs1}</p>
                </div>
                <div className="social">
                    <div className="box-social"><a href={linkedin} target='blanck'><i className="fab fa-linkedin"></i></a></div>
                    <div className="box-social"><a href={github} target="blanck"><i className="fab fa-github-square"></i></a></div>
                    <button className=" btnemail" onClick={(e) => this.emailPaste(e)} value={this.props.email} >
            
                    </button>
                </div>

                <button onClick={(event) => this.next(event)} className="moreInfo"><img className="arrowbtn" alt="arrow right" src="img/right-arrow.svg"></img></button>
                <div className={`backcard-1 ${this.state.show}`}>
                   <div className="container-card-element">
                   <p className="title-card">Top 3 mobilité :</p>
                        <p className="element-card">1 - {workPlace1}</p>
                        <p className="element-card">2 - {workPlace2}</p>
                        <p className="element-card">3 - {workPlace3}</p>
                    <p className="title-card">Télétravail :</p>
                        <p className="element-card">{remote}</p>
                    <p className="title-card">Mobilité internationale :</p>
                        <p className="element-card">{internationalMobility}</p>
                    <p className="title-card">Mobilité France entière :</p>
                        <p className="element-card">{franceMobility}</p>
                   </div>
                <button onClick={(event) => this.back(event)} className="moreInfo" ><img className="arrowbtn" alt="arrow right" src="img/left-arrow.svg"></img></button>
                </div>
            </div>
    } 
}



export default Card;