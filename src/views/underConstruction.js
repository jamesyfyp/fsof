import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    font-size: 20px;
    text-align: center;
    background: #BEE9E8;
    color: #1B4965;
    padding-bottom: 80vh;
`
const LpH1 = styled.h1`
    margin-block-start: 0em;
    margin-block-end: .2em;
    background-color: #62B6CB;
    color: #CAE9FF;
`   


const underConstruction = (props) => {
    return(
        <ContainerDiv>            
            <LpH1>This page is currently under construction</LpH1>
            <img src="https://media.giphy.com/media/xThuWu82QD3pj4wvEQ/source.gif" alt="loading..." />           
        </ContainerDiv >        
    )    
};

export default underConstruction 