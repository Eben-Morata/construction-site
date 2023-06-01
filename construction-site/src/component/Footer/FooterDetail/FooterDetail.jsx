import React,{useState} from 'react';
import "./footerDetail.css";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaWhatsapp} from 'react-icons/fa';

const FooterDetail = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePassword =()=>{
        setShowPassword(!showPassword);
    }
  return (
    <div className='footerDetail'>
                <div className="email">
                   <label htmlFor="">Email:</label>
                     <input type="email" placeholder='Enter email Address...'/>
                </div>
            <div className="password">
            <label htmlFor="">Password:</label>
            <input type={showPassword ? "text" : "password"} placeholder='Enter password...'/>
               <div onClick={handlePassword}>
               {showPassword ? <AiFillEyeInvisible className='icon-rave'/>
                : <AiFillEye className='icon-rave'/> }
               </div>
               <button className="submit">
                   Submit
               </button>
                <div className="social-icons">
                    <a href="https://www.facebook.com"><FaFacebook className='social'/></a>
                    <a href="https://www.Whatsapp.com"><FaWhatsapp className='social'/></a>
                    <a href="https://www.github.com"><FaGithub className='social'/></a>
                </div>
            </div>
    </div>
  )
}

export default FooterDetail