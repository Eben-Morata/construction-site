import React from 'react';
import AboutTab from './AboutTab/AboutTab';
import './home.css';
import HomeSection from './HomeSection/HomeSection';
import HomeSystem from './HomeSys/HomeSystem';
import LatestNews from './LatestNews/LatestNews';
import Faq from './Question/Faq';
import Slider from './slider/Slider';
import Tabs from './Tab/Tabs';

const Home = () => {
  return (
    <div>
        <Slider />
        <HomeSystem />
        <HomeSection />
        <LatestNews />
        <Tabs />
         <div className="aboutMe">
         <Faq />
        <AboutTab />
         </div>
    </div>
  )
}

export default Home