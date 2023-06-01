import React from 'react';
import './homeSection.css';
import construct from './intro.jpg'

const HomeSection = () => {
  return (
    <div className='home-const'>
        <div className="image">
            <img src={construct} alt="" />
        </div>
        <div className="text">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Voluptatum porro adipisci natus
                 magnam dolores consectetur id voluptatibus enim totam ipsum!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa quae repellendus fugiat
                  architecto iure dignissimos maxime iusto sint. Impedit.</p>
        </div>
    </div>
  )
}

export default HomeSection