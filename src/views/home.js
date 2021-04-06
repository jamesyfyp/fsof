import React from 'react';
import Contact from './contact';
import Services from './services';
import Affiliates from './affiliates';
import References from './references';


const home = (props) => {
    return(
        <div>
            <Services />
            <Affiliates />
            <References />
            <Contact />
        </div>        
    )    
};

export default home 