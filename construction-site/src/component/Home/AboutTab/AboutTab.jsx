import React from 'react';
import "./aboutTab.css";
import imag from './ist.jpg'

const AboutTab = () => {
  return (
    <div>
        <div className="img">
          <img src={imag} alt="" />
          <div className="over"></div>
          <div className="describe">
             <h2>Our Goals</h2>
                <ul>
                  <li> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem optio pariatur rem architecto ex facilis!</p></li>
                <li> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem optio pariatur rem architecto ex facilis!</p></li>
                <li> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem optio pariatur rem architecto ex facilis!</p></li>
                </ul>
          </div>
        </div>
    </div>
  )
}

export default AboutTab