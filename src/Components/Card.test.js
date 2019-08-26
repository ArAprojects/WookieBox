import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
    it('should return a snapshot of a card object with people data', () => {
        const data = [{key: "", id: 1, name: "Luke Skywalker", toggleFavorite: jest.fn(), homeworld: "Tatooine", species: "Human", language: "Galactic Basic"}]
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

    it('should return a snapshot of a card object with planet data', () => {
        const data = [{key: "", id: 7, name: "Dagobah", toggleFavorite: jest.fn(), terrain: "swamp, jungles", climate: "murky", population: "unknown", residents: []}]
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

    it('should return a snapshot of a card object with planet data', () => {
        const data = [{key: "", id: 7, name: "Dagobah", toggleFavorite: jest.fn(), terrain: "swamp, jungles", climate: "murky", population: "unknown", residents: []}]
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
