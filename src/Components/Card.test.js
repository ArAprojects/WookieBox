import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
    it('should return a snapshot of a card object with people data', () => {
        const data = {key: "", id: 1, name: "Luke Skywalker", toggleFavorite: jest.fn(), homeworld: "Tatooine", species: "Human", language: "Galactic Basic"}
        const wrapper = shallow(
            <Card
            data={data}
            key={data.key}
            id={data.id}
            name={data.name}
            toggleFavorite={data.toggleFavorite}
            homeworld={data.homeworld}
            species={data.species}
            language={data.language}
            terrain={data.terrain}
            population={data.population}
            climate={data.climate}
            residents={data.residents}
            model={data.model}
            vehicle_class={data.vehicle_class}
            passengers={data.passengers}
            />)

        expect(wrapper).toMatchSnapshot()
    })
})

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: {name: "Tatooine", rotation_period: "23", orbital_period: "304", diameter: "10465", climate: "arid", …}
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: Array(1)
// 0: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
// length: 1
// __proto__: Array(0)
// starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// url: "https://swapi.co/api/people/1/"
// vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]