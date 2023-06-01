import React from 'react';
import './latestModal.css';
import {AiOutlineCloseCircle, AiOutlineInfoCircle} from 'react-icons/ai'

const LatestModal = ({cancelHand}) => {
  return (
    <div className='modal cm'onClick={cancelHand}>
        <div className="modal-container">
                <AiOutlineCloseCircle className='can cm'onClick={cancelHand}/>
             <div className="modal-content">
                <AiOutlineInfoCircle className='modal-icon'/>
                <h2>Do You want the Latest News?</h2>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo voluptatum illum minus? Natus consequatur cumque amet vero placeat sit 
                    unde culpa minus quis veniam? Alias sed assumenda suscipit explicabo sapiente!</p>
                    <div className="buttons">
                        <button className='cancel cm' onClick={cancelHand}>Cancel</button>
                        <button className='proceed'>Proceed</button>
                    </div>
             </div>
    </div>
  )
}

export default LatestModal