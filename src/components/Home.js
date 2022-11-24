import React from 'react';
import image1 from './images/image1.jpg'
import './style.css';
const Home = () => {
  return (
    <div>
     
      <img className="image1" src={image1}/>
    
      <h2>Welcome my friend :)</h2>
    </div>
  )
};

export default Home;
