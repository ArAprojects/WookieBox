import React, { Component } from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import Quote from '../Quote/Quote'
import Card from '../Card/Card'

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      crawlText: [],
      favorites: []
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films").then(response => response.json()).then(data => data.results)
    .then(data => this.setState({crawlText: data[`${Math.floor(Math.random() * Math.floor(7))}`]}))
  Promise.all([
    fetch("https://swapi.co/api/planets").then(response => response.json()).then(data => this.fetchNested(data.results, ["residents"])),
    fetch("https://swapi.co/api/people").then(response => response.json()).then(data => this.fetchNested(data.results, ["species", "homeworld"])),
    fetch("https://swapi.co/api/vehicles").then(response => response.json()).then(data => data.results)
  ])
  .then(data => this.setState({people: data[1], planets: data[0], vehicles: data[2]}))
}

fetchNested = (dataArray, keyArray) => {
  const promises = dataArray.map(item => {
    let finalData = keyArray.map(keyName => {
      if (Array.isArray(item[keyName])) {
        let nestedData = item[keyName].map(nestedURL => fetch(nestedURL).then(response => response.json()))
        return Promise.all(nestedData)
      } else {
        return fetch(item[keyName]).then(response => response.json())
      }
    })
  return Promise.all(finalData)
    .then(data => ({...item, [keyArray[0]]: data[0].flat(), [keyArray[1]]: data[1]}))
    .catch(error => console.log(error));
  });
  return Promise.all(promises);
};


toggleFavorite = (favorite) => {
  if(!favorite.favorite) {
    favorite["favorite"] = true;
    this.setState({ favorites: [...this.state.favorites, favorite] });
  } else {
    let index = this.state.favorites.indexOf(favorite);
    this.state.favorites.splice(index, 1);
    this.setState({...this.state.favorites})
    favorite["favorite"] = false;
  }

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WookieBox</h1>
        </header>
        <section className="buttonContainer">
          <NavLink to='/people' className='nav'><input type="submit" id="people" value=""/><button type="submit">People</button></NavLink>
          <NavLink to='/planets' className='nav'><input type="submit" id="planets" value=""/><button type="submit">Planets</button></NavLink>
          <NavLink to='/vehicles' className='nav'><input type="submit" id="vehicles" value=""/><button type="submit">Vehicles</button></NavLink>
          <NavLink to='/favorites' className='nav'><input type='submit' id="favorites" values=""/><button type="submit">Favorites({this.state.favorites.length})</button></NavLink>
        </section>
        <section>
          <Route exact path="/" render = {() => <Quote className="Quote" data = {this.state.crawlText}/>}/>
          <Route path='/people' render = { () => <Card className="Card" data = {this.state.people} toggleFavorite = {this.toggleFavorite} />} />
          <Route path='/planets' render = { () => <Card className="Card" data = {this.state.planets} toggleFavorite = {this.toggleFavorite} favorites = {this.state.favorites} />} />
          <Route path='/vehicles' render = { () => <Card className="Card" data = {this.state.vehicles} toggleFavorite = {this.toggleFavorite} />} />
          <Route path='/favorites' render = { () => <Card className="Card" data = {this.state.favorites} toggleFavorite = {this.toggleFavorite}/>} />
        </section>
      </div>

    );
  }

}

export default App;
