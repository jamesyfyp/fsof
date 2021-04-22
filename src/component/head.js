import React from 'react';
import styled from 'styled-components';
import HeaderImgSrc from '../images/headerImg1.png';
import LoginButton from './loginButton'

const Heading = styled.div `
  background-image: url(${HeaderImgSrc});
  background-position: center;
  background-size: cover;
  min-height: 30vh;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: calc(4px + 2vmin);
  color: black;
  margin-bottom: 0mm; 
  width: 100%;
  height: auto;
`
const CompanyName = styled.h1 `
    text-align: center;
    background-color: rgba(95, 168, 211, .6);
    color: #1B4965;
    margin-block-start: 0em;
    margin-block-end: 0em;
    bottom: 10px;
    position: absolute;
    width: 100%;
`



const head = (props) => {
    return(
        <Heading>
            <CompanyName>FLEET SERVICES OF FLORIDA</CompanyName>
            <LoginButton />
        </Heading>
    )
}

export default head