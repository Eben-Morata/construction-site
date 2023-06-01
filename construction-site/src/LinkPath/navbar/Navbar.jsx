import React,{useState} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
 import {FaBars, FaTimes} from 'react-icons/fa'; 

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);

  const toggleMenu=()=>{
    setShowIcon(!showIcon)
  }
  return (
    <navbar className="navbar">
        <div className="logo">
        <Link to="/"><h2>Eben</h2></Link>
        </div>
             <div className="lin">
                <ul id="nav-bar" className={showIcon ? "#nav-bar active":"#nav-bar"}>
                <li> <Link  to="/">Home</Link></li>
               <li> <Link  to="/about">About</Link></li> 
                <li> <Link  to="/service">Service</Link></li>
                <li> <Link  to="/contact">Contact</Link></li>
                </ul>
             </div>
             <div className="menu-icon" onClick={toggleMenu}>
               {showIcon ? 
               (<FaTimes className='hamburger'/>)
               :   (<FaBars className='hamburger'/>)
               }
             </div>
    </navbar>
  )
}

export default Navbar