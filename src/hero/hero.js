import "./hero.css";
import DuplicateStar from './duplicateStars'

const Hero = () => {
    return <div className="hero-animation" id="hero">
        
       <div className="gib">
        <div className="gib-element">
        <p className="element-anim">La Wild Code School vous presente</p>
        <br></br>
        <p className="element-anim">R2D WILD</p>
        <br></br>
        <p className="element-anim">20 combattants du code regroupés</p>
        <p className="element-anim">autour d'une même mission </p>
        <p className="element-anim"> devenir des développeurs</p>
        </div>
       </div>
        <div className="afterMessage">
            <p className="hero-fix" value="hello">DISPONIBLE  </p>
            <p className="hero-fix-sd">Dès le 3 mai 2020</p>
        </div>
        <div className="containerPlanet">
            {DuplicateStar}     
        </div>
    </div>
}



export default Hero