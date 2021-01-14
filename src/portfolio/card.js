import React from 'react';
import "./card.css";



const Card = (props) => {
        return <div className="card">
                <div className="top-card">
                    <img className="img-card" alt={props.name} src={props.image} ></img>
                </div>
                <div className="identity">
                    <h2>{props.identity}</h2>
                    <p><i className="fas fa-map-pin"></i> {props.city}</p>
                </div>
                <div className="message">
                    <p>{props.WilderMessage}</p>
                </div>
                <div className="skill">
                    <div className="skill-box"><p>{props.WilderSkill1}</p></div>
                    <div className="skill-box"><p>{props.WilderSkill2}</p></div>               
                    <div className="skill-box"><p>et +</p></div>
                </div>
                <div className="social">
                    <div className="box-social"><a href={props.linkedin} target='blanck'><i class="fab fa-linkedin"></i></a></div>
                    <div className="box-social"><a href={props.github} target="blanck"><i class="fab fa-github-square"></i></a></div>
                    <div className="box-social"><a href={props.email}><i class="far fa-envelope"></i></a></div>
                </div>
                <span className="break"></span>
                <button className="moreInfo">Voir le profil</button>
            </div>
}

export default Card;