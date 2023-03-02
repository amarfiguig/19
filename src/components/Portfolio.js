import React from 'react';

const Portfolio = ({ resumeData }) => {
  const portfolioItems = resumeData.portfolio.map((item, index) => (
    <div className="portfolio-item" key={index}>
      <a href="#modal-01">
        <img src={item.imgurl} className="item-img" alt={item.name} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="container">
        <h2>Check Out Some of My Works</h2>
        <div className="portfolio-wrapper">{portfolioItems}</div>
      </div>
    </section>
  );
};

export default Portfolio;
