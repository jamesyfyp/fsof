import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
    justify-content: center;
    border-radius: 10px;
    height: auto;
    padding: .5%;
    text-align: center; 
`;

const InternalWrapper = styled.div`
    max-height: ${(props) => (props.open ? '100%' : '0')};
    overflow: hidden;
    background-color: #62B6CB;
    color: #1B4965;
    width: 50%;
    margin-left: 25%;
`;


const Button = styled.button`
    width: 50%;
    background-color: #1B4965;
    color: #CAE9FF;
    border-color: lightgrey;
    border-radius: 10px;
    font-size: 20px;
`;

const Accordion = ({ name, contact, email, num}) => {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <AccordionWrapper>            
            <Button padding="5px" onClick={handleClick}>
            <p>{name}</p>
            </Button>
            <InternalWrapper open={open}>
                <p><strong>Contact: </strong>{contact}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Phone: </strong>{num}</p>
            </InternalWrapper>
        </AccordionWrapper>
    );
};

Accordion.defaultProps = {
    title    : 'title',
    subTitle : 'subtitle',
    btnText  : 'Read more >>'
};

export default Accordion;

