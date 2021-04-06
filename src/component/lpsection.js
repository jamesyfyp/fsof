import React from 'react';
import styled from 'styled-components';

const Lpsection = styled.div`
    font-size: 25px;
    text-align: center;
    background: #BEE9E8;
    color: #1B4965;
`
const LpText = styled.p`
    margin: 0 0 0 0;
`
const LpH1 = styled.h1`
    margin-block-start: 0em;
    margin-block-end: .2em;
    background-color: #62B6CB;
    color: #CAE9FF;
    
`
const body = (props) => {
    return(
        <Lpsection id={props.id}>
            <LpH1>{props.id}</LpH1>
            <LpText>{props.text[0]}</LpText>
            <LpText>{props.text[1]}</LpText>
        </Lpsection>
    )
}

export default body