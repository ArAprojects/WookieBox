import React, { Component } from 'react';
import Container from './Container.js'
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import Card from './Card.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      crawlTextArray: [],
      favorites: []
    }
  }

  componentDidMount() {
  Promise.all([
    fetch("https://swapi.co/api/planets").then(response => response.json()).then(data => this.fetchEverything(data.results, ["residents"])),
    fetch("https://swapi.co/api/people").then(response => response.json()).then(data => this.fetchEverything(data.results, ["species", "homeworld"])),
    fetch("https://swapi.co/api/vehicles").then(response => response.json()).then(data => this.fetchEverything(data.results, ["films"])),
    fetch("https://swapi.co/api/films").then(response => response.json()).then(data => data.results).then(data => data.map(film => film.opening_crawl))
  ])
  .then(data => this.setState({people: data[1], planets: data[0], vehicles: data[2], crawlTextArray: data[3]}))
}


fetchEverything = (dataArray, keyArray) => {
const promises = dataArray.map(item => {
  let finalData = keyArray.map(keyName => {
    if (Array.isArray(item[keyName])) {
      let nestedData = item[keyName].map(nestedURL => fetch(nestedURL).then(response => response.json()))
      return Promise.all(nestedData)
    }
    else {
      return fetch(item[keyName]).then(response => response.json())
    }
  })
  return Promise.all(finalData)
   .then(data => ({data: item, nestedApis: data.flat()}))
   .catch(error => console.log(error));
});
return Promise.all(promises);
};

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>WookieBox</h1>
        </header>
        <section className="buttonContainer">
          <NavLink to='/people' className='nav'><button id="people">People</button></NavLink>
          <NavLink to='/planets' className='nav'><button id="planets">Planets</button></NavLink>
          <NavLink to='/vehicles' className='nav'><button id="vehicles">Vehicles</button></NavLink>
        </section>
        <Route path='/people' render = { () => <Card data = {this.state.people} />} />
        <Route path='/planets' render = { () => <Card data = {this.state.planets} />} />
        <Route path='/vehicles' render = { () => <Card data = {this.state.vehicles} />} />
      </div>

    );
  }

}

export default App;
