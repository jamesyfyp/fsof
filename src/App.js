import React from 'react';
import { Router, Link } from "@reach/router";
import './App.css';
import Head from './component/head';
import Nav from './component/nav';
import Affiliates from './views/affiliates';
import Services from './views/services';
import References from './views/references';
import Contact from './views/contact';
import Home from './views/home';
import UnderConstruction from './views/underConstruction';

//*import { element } from 'prop-types';



function App() {
  return (         
    <div className="App">
      <Head />
      <Nav />
      <Router>
        <Home path="/" />
        <Services path='/services' />
        <Affiliates path="/affiliates" />
        <References path="/references" />
        <Contact path="/contact" />
        <UnderConstruction path="/underconstruction" />
      </Router>
    </div>
  );
};

export default App;
