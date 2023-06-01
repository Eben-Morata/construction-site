import React from 'react';
import './faq.css';
import questions from './questionData'
import Questions from './Questions';

const Faq = () => {
  return (
    <div className='faq-container'>
       <div className="title">
        <h2>FAQ'S</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Porro corrupti in cumque ipsam consequuntur voluptate ea,
           excepturi deleniti iure eligendi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolore earum velit facere 
           quod illo nam, repellat assumenda consectetur optio expedita.</p>
       </div>
       <div className="faq-content">
           {questions.map((quest)=>{
             return(
               <div className="faq"key={quest.id}>
                    <Questions title={quest.title} answer={quest.answer} />
               </div>
             )
           })}
       </div>
    </div>
  )
}

export default Faq