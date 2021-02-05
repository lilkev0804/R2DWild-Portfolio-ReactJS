import "./staff.css";

const members = [
    {
        name:"abdou",
        surname:"Kerkeb",
        profession: 'formateur',
        linkedin: 'https://www.linkedin.com/in/akerkeb/',
        github: 'https://github.com/Miadil',
        img:"img/abdou.jpeg"
    },
    {
        name:"florian",
        surname:"Grandjean",
        profession: 'formateur',
        linkedin: 'https://www.linkedin.com/in/florian-grandjean/',
        github: 'https://github.com/florianpdf',
        img:"img/florian.jpeg"
    },
    {
        name:"clément",
        surname:"Bechetoille",
        profession: 'Campus Manager',
        linkedin: 'https://www.linkedin.com/in/clementbechetoille/',
        github: '',
        img:"img/clement.jpg"
    }
]


const Staff = () => {
    
    return <div className="section-staff" >
    <h2 className="staff-section-title">Contacter la Wild Code School</h2>
       <div className="container-staff">
           <div className="profils-staff">
                {members.map((member, index) => {
                   return <div key={index} className="staff-card">
                        <div className="left-side">
                            <img className="img-members" alt={member.name}src={member.img}></img>
                        </div>
                        <div className="right-side">
                            <p className="member-name">{member.name} {member.surname}</p>
                            <p className="member-profession">{member.profession}</p>
                            <div className="social-member">
                            <a target="blanck" href={member.linkedin}> <i className="ico-follow-member fab fa-linkedin-in"></i></a>
                            <a className={`githublogo ${member.github === "" ? 'invisible' : 'visible'}`} target="blanck" href={member.github}> <i className="ico-follow-member fab fa-github"></i></a>
                            </div>
                        </div>
                        </div>
                })}
           </div>
           <div className="recrutement">
                <h3 className="title-contact">Nous recruter ? </h3>
                <p className="contact-cb">Contacter Clément Bechetoille par email <span className="email-cb">clement.bechetoille@wildcodeschool.com</span></p>
                <p>ou </p>
                <p>directement à cette <a target="blanck" href="https://www.wildcodeschool.com/fr-FR/recrutez-vos-talents"> adresse</a> afin de déposer une annonce. </p>
           </div>
       </div>
    </div>
}
export default Staff