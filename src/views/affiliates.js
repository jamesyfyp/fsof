import React from 'react';
import section from '../component/copy';
import Body from '../component/lpsection';
import TileTwo from '../component/tiletwo';

const affiliates = (props) => {
    return(
        <div>
            <Body 
                id={section.certfiedVendors.id}
                text ={section.certfiedVendors.text}>    
            </Body>
                {section.certfiedVendors.companyName.map((s, i) =>
            <TileTwo
              key={i}
              text={s.text} 
              img={s.image}
              imgAlt={s.text}
            />
          )}
        </div>
    )    
};

export default affiliates