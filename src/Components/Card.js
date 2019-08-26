import React from 'react'
// import { Link } from 'react-router-dom'
import './Card.css'
const uuidv4 = require('uuid/v4');


const Card = ( {data, toggleFavorite} ) => {
    const displayCards = data.map(card => {
      const { name, population, species, homeworld, residents, terrain, climate, model, vehicle_class, passengers } = card;
      card["id"] = uuidv4()
      console.log(card)
        const notDefined = (keys, type) => {
          if(keys === undefined) {
            return ''
          }
          else if (Array.isArray(keys)) {
            return keys.map(key => key[type])
          }
          else {
            return keys[type]
          }
        }



      return (
        <section className="Card" key={uuidv4()}>
          <div className="name-and-button">
            <p>{name}</p>
             <button onClick={() => toggleFavorite(card) }>Favorite</button>
          </div>
          <div className="content">
            {terrain && <p>Terrain: {terrain}</p>}
            {climate && <p>Climate: {climate}</p>}
            {model && <p>Model: {model}</p>}
            {vehicle_class && <p>Class: {vehicle_class}</p>}
            {passengers && <p>Passenger Capacity: {passengers}</p>}
            {notDefined(species, "name") && <p>Species: {notDefined(species, "name")}</p>}
            {notDefined(homeworld, "name") && <p>homeworld: {notDefined(homeworld, "name")}</p>}
            {notDefined(species, "language") && <p>language: {notDefined(species, "language")}</p>}
            {population && <p>Population: {population}</p>}
            {notDefined(residents, "name") && <p>Residents: {notDefined(residents, "name")}</p>}
          </div>
        </section>
      )
    });

    return (
    <div className="cardContainer">
      {displayCards}
    </div>
  );
}

export default Card
