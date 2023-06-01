import React from 'react';
import './homeSystem.css';
import system from './SystemData'

const HomeSystem = () => {
  return (
    <div className='homeSystem'>
        {
           system.map((syst)=>{
             return(
               <div className='system'key={syst.id}>
                      <div className="picture">
                    <img src={syst.image} alt={syst.title} />
                 </div>
                 <div className="description">
                    <h2>{syst.title}</h2>
                    <p>{syst.desc}</p>
                 </div>
                      </div>
             )
           })
        }
    </div>
  )
}

export default HomeSystem