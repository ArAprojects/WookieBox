import React, { Component } from 'react';
import Container from './Container.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }


  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/people/').then(response => response.json()),
      fetch('https://swapi.co/api/planets/').then(response => response.json()),
      fetch('https://swapi.co/api/vehicles/').then(response => response.json())
    ])
    .then(data => this.setState({people: data[0], planets: [1], vehicles: [2]}))
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
