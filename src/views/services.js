import React from 'react';
import section from '../component/copy';
import Body from '../component/lpsection'
import Tile from '../component/ptile';

const services = (props) => {
    return(
        <div>
            <Body
                id={section.services.id} 
                text={section.services.text}>
            </Body>
            {section.services.customerServices.map((s, i) =>
                <Tile
                    key={i}
                    text={s.text} 
                    img={s.image}
                    imgAlt={s.text}
                />
            )}
        </div>
    )    
};

export default services 