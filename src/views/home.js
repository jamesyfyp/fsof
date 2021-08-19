import React from 'react';
import Contact from './contact';
import Services from './services';
import Affiliates from './affiliates';
import References from './references';



 let Home = (props) =>  {
    
    if (props.contacted === false) {
        return(
            <div>
                <Services />
                <Affiliates />
                <References />
                <Contact contacted={props.contacted} setContacted={props.setContacted}/>
            </div>        
        );   
    };

    return(
        <div>
            <Services />
            <Affiliates />
            <References />
        </div>        
    );   
      
};

export default Home 