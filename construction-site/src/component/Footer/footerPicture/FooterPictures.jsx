import React from 'react';
import "./footerPictures.css";
import data from './data '

const FooterPictures = () => {
  return (
    <div className='item-container'>
        {
            data.map((item)=>{
                return(
                    <div key={item.id} className='item-cards'>
                        <img src={item.image} alt="item" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default FooterPictures