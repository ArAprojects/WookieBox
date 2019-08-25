import React from 'react';
import './Quote.css'

const Quote = ({data}) => {
    return (
            <div className="scrollText">
                <p>{data.opening_crawl}</p>
                <br/>
                <p>-{data.title}, ({data.release_date})</p>
            </div>
    )
};

export default Quote;
