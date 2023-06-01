import React,{useState} from 'react';
import LatestModal from './LatestModal';
import './latestNews.css';

const LatestNews = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal=()=>{
    setShowModal(true);
  }

  const cancelModal=(e)=>{
    if (e.target.classList.contains('cm')) {
      setShowModal(false);
    }
  }
  return (
    <>
    <div className='latest-container'>
        <div className="latest">
            <h2>Latest News</h2>
            <span className="line1"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi id rerum qui illum,
                 corrupti asperiores voluptas debitis blanditiis assumenda.
            </p>
        </div>
        <div className="latest-but">
            <button onClick={handleModal}>Latest News</button >
        </div>
    </div>
    {showModal && <LatestModal cancelHand={cancelModal}/>}
    </>
  )
}

export default LatestNews