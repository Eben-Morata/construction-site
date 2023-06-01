import React,{useState,useEffect} from 'react';
import "./slider.css";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import data from './datas'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = data.length;

    const autoScroll = true;
    let intervalTime;
    let intervalTimeOut = 5000;


    const nextSlide=()=>{
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide=()=>{
        setCurrentSlide(currentSlide ===  0 ? slideLength -1 : currentSlide - 1);
    }

    useEffect(()=>{
        setCurrentSlide(0);
     },[])

    function auto() {
        intervalTime = setInterval(nextSlide ,intervalTimeOut);
    }

    useEffect(()=>{
        if (autoScroll) {
            auto();
        }
        return ()=> clearInterval(intervalTime)
     },[currentSlide])
  return (
    <div className='sliders'>
         <AiOutlineLeft className='slider-arrow prev' onClick={prevSlide}/>
         <AiOutlineRight className='slider-arrow next' onClick={nextSlide}/>

          {data.map((slide ,index)=>{
              return(
                  <div key={index} className={index === currentSlide ? "slide active":"slide"}>
                        {index === currentSlide && (
                            <div>
                                <img src={slide.image} alt="slide" />
                                <div className="describ">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.describes}</p>
                                </div>
                            </div>
                        )}
                  </div>
              )
          })}
           <div className="slide-overlay"></div> 
    </div>
  )
}

export default Slider