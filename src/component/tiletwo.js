import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
    background-color: #CAE9FF;
    display: inline-table;
    margin: 10px;
    border: 1px solid rgba(27, 73, 101, .05);
    box-shadow: 0 8px 8px #1B4965;
    width: 220px;
    height: 160px;
    border-radius: 5px;
    margin: 20px 20px 50vh 20px;
  `
  
const Tileimg = styled.img`
    max-width: 200px;
    max-height: 70px;
    border: 1px solid rgba(27, 73, 101, .05);
    box-shadow: 0 8px 8px #1B4965;
    background-color: white;
    margin-top: 20px;
    border-radius: 5px;
    
  `

const tiletwo = (props) => {
    return(
        <Tile id={props.id}>
            <Tileimg src={props.img}/>
            <p>{props.text}</p>
        </Tile>
    )
}

export default tiletwo