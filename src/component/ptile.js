import React from 'react';
import styled from 'styled-components';


const Tile = styled.div`
    background-color: #CAE9FF;
    display: inline-table;
    margin: 20px 20px 40px 20px;
    border: 1px solid rgba(27, 73, 101, .05);
    box-shadow: 0 8px 8px #1B4965;
    width: ${(window.innerWidth > 460) ? '240px' : '85%'};
    height: 280px;
    color: #1B4965;
    border-radius: 5px;
  `
  
  
const Tileimg = styled.img`
    margin-top: 20px;
    max-width: 200px;
    max-height: 200px;
    border: 1px solid rgba(27, 73, 101, .05);
    box-shadow: 0 8px 8px #1B4965;
    padding: 0 0 0 0;
    background-color: lightgrey;
    border-radius: 5px;
  `

const bodyTile = (props) => {
    return(
        <Tile id={props.id} >
            <Tileimg src={props.img}/>
            <p>{props.text}</p>
        </Tile>
    )
}

export default bodyTile