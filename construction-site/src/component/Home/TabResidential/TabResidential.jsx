import React,{useState} from 'react';
import './tabResidential.css';
import data from './data'

const TabResidential = () => {
    const [input, setInput] = useState('');

    const handleInput = (e)=>{
        setInput(e.target.value)
    }

  return (
    <div>
        <div className="input">
            <input type="search" placeholder='Search...'
            value={input} onChange={handleInput}/>
        </div>
        <div className="images">
            {data.filter((value)=>{
                if (input === '') {
                    return value;
                }else if (value.name.toLowerCase().includes(input.toLowerCase())) {
                    return value;
                }
            }).map((image)=>{
                return(
                    <div className='pic-gallery' key={image.id}>
                        <img src={image.image} alt={image.name} className="pic" />
                        <div className="overlay">
                            <div className="desc">
                                <h2>{image.name}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TabResidential