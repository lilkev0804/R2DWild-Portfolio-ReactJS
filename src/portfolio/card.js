import React from 'react';
import "./card.css";
import BackCardFisrt from './BackCardFirst'



class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = props
    }
    openBackCard = () => {
       return<BackCardFisrt></BackCardFisrt>
    }
    render(){
        return <div className="card" date-index={this.state.key}>
                <div className="top-card">
                    <img className="img-card" alt={this.state.name} src={this.state.image} ></img>
                </div>
                <div className="identity">
                    <h2>{this.state.identity}</h2>
                    <p><i className="fas fa-map-pin"></i> {this.state.city}</p>
                </div>
                <div className="message">
                    <p>{this.state.WilderMessage}</p>
                </div>
                <div className="skill">
                    <div className="skill-box"><p>{this.state.WilderSkill1}</p></div>
                    <div className="skill-box"><p>{this.state.WilderSkill2}</p></div>               
                    <div className="skill-box"><p>et +</p></div>
                </div>
                <div className="social">
                    <div className="box-social"><a href={this.state.linkedin} target='blanck'><i class="fab fa-linkedin"></i></a></div>
                    <div className="box-social"><a href={this.state.github} target="blanck"><i class="fab fa-github-square"></i></a></div>
                    <div className="box-social"><a href={this.state.email}><i class="far fa-envelope"></i></a></div>
                </div>
                <span className="break"></span>
                <button className="moreInfo" onClick={this.openBackCard}>Voir le profil</button>
            </div>
    } 
}
export default Card;