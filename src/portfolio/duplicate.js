import React from 'react';
import Card from './card';
import Wilders from './profils/profils';



const DuplicateCard = Wilders.map((Wilder , i)  =>
  <Card key={i}
  image={"./img/" + Wilder.image + ".jpg"}
  identity={Wilder.identity}
  city={Wilder.city}
  WilderMessage={Wilder.prez}
  WilderSkill1={Wilder.skill[0]}
  WilderSkill2={Wilder.skill[1]}
  linkedin={Wilder.linkedin}
  github={Wilder.github}
  email={Wilder.email}
  ></Card>
);


export default DuplicateCard 