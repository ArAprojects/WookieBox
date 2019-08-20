import React from 'react';
import './Container.css';
import Card from './Card.js';

const Container = (props) => {
  console.log(props.peopleData)
  if (props.peopleData.results === undefined) {
    return (
      <main>
      </main>
    )
  }
    else
  return (
          <main>
          <p>HEY</p>
        {props.peopleData.results.map(person => <Card qualities={person} />)}
          </main>
       )
}

export default Container;
