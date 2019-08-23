import React from 'react'
import { Link } from 'react-router-dom'


const Card = ( {data} ) => {
  console.log("hey", data)
    const displayCards = data.map(card => {
      const { name, population, species } = card;

      const notDefined = (key, type) => {
        if(key === undefined) {
          return ''
        }
        else {

          return ( <p>{key.name}</p>)
        }
      }


      return (
        <div>
        {name && <p>Name: {name}</p>}
        {notDefined(species, name)}
        {population && <p>population: {population}</p>}
        </div>
      )
    });

    return (
    <div>
      <h1>Creatures!</h1>
      {displayCards}
    </div>
  );
}



export default Card
