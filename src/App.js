import React, { useState } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Head from './component/head';
import Nav from './component/nav';
import Affiliates from './views/affiliates';
import Services from './views/services';
import References from './views/references';
import Contact from './views/contact';
import Home from './views/home';
import UnderConstruction from './views/underConstruction';


const App = () => {

  const [contacted, setContacted ] = useState(false);
  
  const contactedSet = (contacted) => {
      console.log(contacted);
      setContacted(!contacted);
      console.log(contacted);
  };
  
  const [token, setToken] = useState('');
  
  const tokenSet = e => {
    setToken(e)
  };
  
  
    return (         
      <div className="App">
        <Head token={token} tokenSet={tokenSet}/>
        <Nav contacted={contacted} setContacted={contactedSet}/>
        <Router>
          <Home contacted={contacted} setContacted={contactedSet} path="/" />
          <Services path='/services' />
          <Affiliates path="/affiliates" />
          <References path="/references" />
          <Contact contacted={contacted} setContacted={contactedSet} path="/contact" />
          <UnderConstruction path="/underconstruction" />
        </Router>
      </div>
    );
};

export default App;
