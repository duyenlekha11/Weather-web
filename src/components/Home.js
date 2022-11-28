import React from 'react';
import image1 from './images/image1.jpg'
import './style.css';
import graph1 from './images/graph1.png'
import graph2 from './images/graph2.png'
const Home = () => {
  return (
    <div>
     
      <img className="image1" src={image1}/>
      <p className='paragraph'>
      The objective of this project is to enable farmers to produce higher-quality products in higher quantities, at a lower risk. Currently, long-term weather predictions have a low degree of accuracy. We aim to leverage machine learning to increase the accuracy of weather predictions and display it on the website to enable Arkansas rice producers to make more informed decisions.
      </p>
      <img className="graph1" src={graph1}/>
      <img className="graph2" src={graph2}/>
    </div>
  )
};

export default Home;
