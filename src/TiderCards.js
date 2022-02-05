import React, { useState } from 'react';
import './TinderCards.css'
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@mui/material';

function TiderCards() {
  const [people,setPeople] = useState([
  { 
    name:'Elon',
    url:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"

},
{
  name:'steev',
url:"https://hs-marketing.imgix.net/images/blog/steve-jobs.jpg?auto=compress,format&fit=scale&w=1600&dpr=1"
}

  ]);

const swiped = (direction, nameToDelete) =>{
  console.log("removing:"+nameToDelete);
  // setLastDirection(direction);
};
const outOfFrame = (name)=>{
  console.log(name + "left the screen");
};


  return <div className='tindercards'>
  <div className="tinderCards__cardContainer">

  {people.map((person)=>(
    <TinderCard 
    className='swipe'
    key={person.name}
    preventSwipe={["up","down"]}
    onSwipe={(dir) => swiped(dir,person.name)}
    onCardLeftScreen={() => outOfFrame(person.name)} >

    <div style={{backgroundImage:`url(${person.url})`}} className="card">
    <h3>{person.name}</h3>
    </div>
    </TinderCard>
  ))}
  </div>


  
  
  
  </div>;
}

export default TiderCards;

