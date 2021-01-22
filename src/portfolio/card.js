import React from 'react';
import "./card.css";



class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : ""

        }
    }
    next  = (event) =>  {
     this.setState({
         show:"showBackcard"
         
     })
    }
    back  = (event) =>  {
        this.setState({
            show:""
        })
    }
    

    render(){
        return <div className="card" date-index={this.props.key}>
                <div className="top-card">
                    <img className="img-card" alt={this.props.name} src={this.props.image} ></img>
                </div>
                <div className="identity">
                    <h2>{this.props.identity}</h2>
                    <p><i className="fas fa-map-pin"></i> {this.props.workPlace1}</p>
                </div>
                <div className="message">
                    <p className="expertise-element">Secteur d'expertise :</p>
                    <p className="myexpertise">{this.props.beforeWcs1}</p>
                </div>
                <div className="social">
                    <div className="box-social"><a href={this.props.linkedin} target='blanck'><i class="fab fa-linkedin"></i></a></div>
                    <div className="box-social"><a href={this.props.github} target="blanck"><i class="fab fa-github-square"></i></a></div>
                    <div className="box-social"><a href={this.props.email}><i class="far fa-envelope"></i></a></div>
                </div>
                <button onClick={(event) => this.next(event)} className="moreInfo" ><img className="arrowbtn" alt="arrow right" src="img/right-arrow.svg"></img></button>
                <div className={`backcard-1 ${this.state.show}`}>
                   <div className="container-card-element">
                   <p className="title-card">Top 3 mobilité :</p>
                        <p className="element-card">1 - {this.props.workPlace1}</p>
                        <p className="element-card">2 - {this.props.workPlace2}</p>
                        <p className="element-card">3 - {this.props.workPlace3}</p>
                    <p className="title-card">Télétravail :</p>
                        <p className="element-card">{this.props.remote}</p>
                    <p className="title-card">Mobilité internationnale :</p>
                        <p className="element-card">{this.props.internationalMobility}</p>
                    <p className="title-card">Mobilité France entière :</p>
                        <p className="element-card">{this.props.franceMobility}</p>
                   </div>
                <button onClick={(event) => this.back(event)} className="moreInfo" ><img className="arrowbtn" alt="arrow right" src="img/left-arrow.svg"></img></button>
                </div>
            </div>
    } 
}



export default Card;