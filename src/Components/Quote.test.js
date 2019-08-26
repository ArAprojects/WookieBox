import React from 'react'
import { shallow } from 'enzyme'
import Quote from './Quote'

describe('Quote', () => {
    it('should match the film crawl text', () => {
        const data = {title: "Return of the Jedi", release_date: "1983-05-25", opening_crawl: "Luke Skywalker has..."}
        const wrapper = shallow(<Quote 
            data={data}
            title={data.title}
            release_date={data.release_date}
            opening_crawl={data.opening_crawl}
        />)
        expect(wrapper).toMatchSnapshot()
    })

})