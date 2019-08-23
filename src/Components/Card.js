import React from 'react'
import { Link } from 'react-router-dom'


const Card = ( {data} ) => {
  console.log("hey", data)
    const displayCards = data.map(card => {
      const { data, name } = card;
      return (
        <div>
        <p>{ data.name}</p>
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
