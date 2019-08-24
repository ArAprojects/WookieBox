import React from 'react'
// import { Link } from 'react-router-dom'
import './Card.css'


const Card = ( {data} ) => {
    const displayCards = data.map(card => {
      const { name, population, species} = card;
        const notDefined = (key, type) => {
          if(key === undefined) {
            return ''
          }
          else {
            return key[0][type]
          }
        }
      return (
        <div className="Card">
        {name && <p>Name: {name}</p>}
        {notDefined(species, "name") && <p>Species: {notDefined(species, "name")}</p>}
        {population && <p>Population: {population}</p>}
        </div>
      )
    });

    return (
    <div className="cardContainer">
      {displayCards}
    </div>
  );
}



export default Card
