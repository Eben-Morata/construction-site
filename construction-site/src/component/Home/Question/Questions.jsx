import React,{useState} from 'react';
import './questions.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Questions = ({title ,answer}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer=()=>{
     setShowAnswer(!showAnswer);
  }
  
  return (
    <div className='questions'>
        <div className='questions-container'>
              <div className="question">
                <h2>{title}</h2>
              </div>
              <div className="flat-icon">
                <button className="flat"onClick={handleAnswer}>
                  {
                    showAnswer ? <AiOutlineMinus/>:
                    <AiOutlinePlus />
                  }
                </button>
              </div>
        </div>
        <div className="answer">
             {showAnswer && <p>{answer}</p>}
           </div>
    </div>
  )
}

export default Questions