import React, { Component } from 'react';
import Container from './Container.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: '',
      planets: '',
      vehicles: '',
      favorites: []
    }
  }


  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/people/').then(response => response.json())
      .then(person => this.setState({people: person})),
      fetch('https://swapi.co/api/planets/').then(response => response.json())
      .then(planet => this.setState({planets: planet})),
      fetch('https://swapi.co/api/vehicles/').then(response => response.json())
      .then(vehicle => this.setState({vehicles: vehicle})),
    ])
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WookieBox</h1>
        </header>
        <Container peopleData = {this.state.people} planetData = {this.state.planets} vehicleData = {this.state.vehicles}/>
      </div>
    );
    }

}





export default App;
