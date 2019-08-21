import React from 'react'
import './Container.js'

const Card = (props) => {
    if (!props.planets && !props.vehicles) {
      return (
          <section>
            {props.people.data.name && <p>Name: {props.people.data.name}</p>}
          </section>
      )
    } else if (!props.people && !props.vehicles)
  return (
      <section>
        {props.planets.data.name && <p>Name: {props.planets.data.name}</p>}
      </section>
  )


}

export default Card
