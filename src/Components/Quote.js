import React from 'react';
import './Quote.css'

const Quote = ({data}) => {
  console.log("quote", data)
  if (data.opening_crawl === undefined) {
    return (
      <div className="scrollText">
        <p>Loading...</p>
      </div>
    )
      }
      else
    return (
        <section className="box">
          <div className="crawl-container">
            <div className="crawl">
                <p>{data.opening_crawl}</p>
                <br/>
                <p>{data.title} {data.release_date}</p>
            </div>
          </div>
        </section>
    )
};

export default Quote;
