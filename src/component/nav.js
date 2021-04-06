import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const TopNav = styled.div` 
    background-color: #1B4965;
`

const NavLink = styled.p`
    display: inline;
    color: #CAE9FF;
    bottom: 5px;
    position: center;
    font-size: 30px;
    margin-right: 2.5%;
    text-decoration: none;

    &:hover {
        background-color:#CAE9FF;
        color: #1B4965;
    }
`

    

const nav = (props) => {
    return(
        <TopNav>
            <Link to="/services"><NavLink>Services</NavLink></Link>
            <Link to="/affiliates"><NavLink>Affiliates</NavLink></Link>
            <Link to="/references"><NavLink>References</NavLink></Link>
            <Link to="/contact"><NavLink>Contact</NavLink></Link>
        </TopNav>
    )    
};

export default nav