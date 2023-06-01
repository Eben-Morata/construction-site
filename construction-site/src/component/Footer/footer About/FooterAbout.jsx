import React,{useState} from 'react';
import "./footerAbout.css"

const FooterAbout = () => {
      const [tabIndex, setTabIndex] = useState(1);

      const handleTabIndex=(index)=>{
            setTabIndex(index);
      }
  return (
    <div className='footer-about'>
          <div className="about-content">
                <h4>More About Us</h4>
                <p>Click on the Buttons to know more</p>
                <div className="tabe-content">
                      <div className="tabes">
                           <button onClick={()=>handleTabIndex(1)} className={tabIndex === 1 ? "tabe tabe-active" : "tabe"}>What We Do </button>
                              <button onClick={()=>handleTabIndex(2)} className={tabIndex === 2 ? "tabe tabe-active" : "tabe"}>Who We Are </button>
                                 <button onClick={()=>handleTabIndex(3)} className={tabIndex === 3 ? "tabe tabe-active" : "tabe"}>Get In touch </button>
                      </div>
                      <div className="contenters">
                            <div className={tabIndex === 1 ? "contents contents-active" : "contents" }>
                                  <h2>What We Do</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam repellat, 
                                    optio unde necessitatibus consequatur. 
                                    Assumenda blanditiis laborum voluptate quia.</p>
                            </div>
                            <div className={tabIndex === 2 ? "contents contents-active" : "contents" }>
                                  <h2>Who We Are</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam repellat, 
                                    optio unde necessitatibus consequatur. 
                                    Assumenda blanditiis laborum voluptate quia.</p>
                            </div>
                            <div className={tabIndex === 3 ? "contents contents-active" : "contents" }>
                                  <h2>Get In Touch</h2>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam repellat, 
                                    optio unde necessitatibus consequatur. 
                                    Assumenda blanditiis laborum voluptate quia.</p>
                            </div>
                      </div>
                </div>
          </div>
    </div>
  )
}

export default FooterAbout