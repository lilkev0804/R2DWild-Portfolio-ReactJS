import "./hero.css";

const Hero = () => {
    
    return <div className="hero-animation" id="hero">
       <div className="gib">
       <p className="element-anim">La Wild Code School vous presente</p>
        <br></br>
        <p className="element-anim">R2D WILD</p>
        <br></br>
        <p className="element-anim">20 combatants du code regroupé</p>
        <p className="element-anim">autour d'une même mission </p>
        <p className="element-anim"> devenir des developpeurs</p>
       </div>
        <p className="hero-fix">Welcome </p>
        <p className="hero-fix-sd">R 2 D W i L D</p>
        <div className="containerPlanet">
            <div className="planet-1"><span class="shadow-planet"></span></div>
            <div className="planet-2"><span class="shadow-planet"></span></div>
        </div>
    </div>
}



export default Hero