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
  remote={Wilder.remote}
  workPlace1={Wilder.workPlace[0]}
  workPlace2={Wilder.workPlace[1]}
  workPlace3={Wilder.workPlace[2]}
  beforeWcs1={Wilder.beforeWcs[0]}
  beforeWcs2={Wilder.beforeWcs[1]}
  beforeWcs3={Wilder.beforeWcs[2]}
  franceMobility={Wilder.franceMobility}
  internationalMobility={Wilder.internationalMobility}
  ></Card>
);


export default DuplicateCard 