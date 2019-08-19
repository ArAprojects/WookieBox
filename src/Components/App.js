import React, { Component } from 'react';
import Container from './Container.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: ''
    }
  }


  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/people/1/').then(response => response.json())
      .then(person => this.setState({people: person}))
    ])
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WookieBoxxxxxx</h1>
        </header>
        <Container peopleData = {this.state.people}/>
      </div>
    );
    }

}





export default App;
