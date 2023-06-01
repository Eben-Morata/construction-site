import React from 'react';
import FooterAbout from './footer About/FooterAbout';
import './footer.css';
import FooterDetail from './FooterDetail/FooterDetail';
import FooterPictures from './footerPicture/FooterPictures';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="footer-content">
             <div className="footer-1">
               <h3>ABOUT US</h3>
                   <FooterAbout/> 
             </div>
             <div className="footer-2">
             <h3>EMAIL US</h3>
                  <FooterDetail />
             </div>
             <div className="footer-3">
             <h3>OUR PROJECTS</h3>
                 <FooterPictures/>
             </div>
        </div>
    </footer>
  )
}

export default Footer