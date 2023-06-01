import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Service from '../component/Service/Service';
import Contact from '../component/Contact/Contact';
import './linkPath.css';
import Navbar from './navbar/Navbar';
import Footer from '../component/Footer/Footer';

const LinkPath = () => {
  return (
    <div>
        <Navbar />
        <Switch>
            <Route exact path="/">
                 <Home />
            </Route>
            <Route path="/about">
                 <About />
            </Route>
            <Route path="/service">
                 <Service />
            </Route>
            <Route path="/contact">
                 <Contact />
            </Route>
        </Switch>
            <Footer />
    </div>
  )
}

export default LinkPath