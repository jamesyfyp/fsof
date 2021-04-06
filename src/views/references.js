import React from 'react';
import styled from 'styled-components';
import Accordion from '../component/Accordion';
import Body from '../component/lpsection';
import section from '../component/copy';

const ContainerDiv = styled.div`
    font-size: 25px;
    text-align: center;
    background: #BEE9E8;
    color: #1B4965;
    padding-bottom: 20vh;
`

const references = (props) => {
    return(
        <ContainerDiv>
            <Body id={section.references.id} text={section.references.text}/>
            {section.references.refObj.map((s, i) =>
                <Accordion
                key={i}
                name={s.name}
                contact={s.contact}
                email={s.email}
                num={s.num}
                />
            )}
        </ContainerDiv>      
    )    
};

export default references