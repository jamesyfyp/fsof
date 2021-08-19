import React from 'react';
import section from '../component/copy';
import Body from '../component/lpsection';
import ContactForm from '../component/contactForm';

const contacts = (props) => {
    return(
        <div>
          <Body id={section.contact.id} text={section.contact.text} />
          <ContactForm contacted={props.contacted} setContacted={props.setContacted}/>
        </div>   
    )    
};

export default contacts