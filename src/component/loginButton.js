import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const LoginButton = styled.button `
    position:absolute;
    top: 20px;
    right: 20px;
    background-color: #BEE9E8;
    border: none;
    color: #1B4965;
    padding: 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    border-radius: 8px;
    box-shadow: rgba(98, 182, 203, .7) 6px 12px 0px 0px;
`

const LoginBut = (props) => {


    return (
        <div>
        <LoginButton><Link to="/underconstruction">Login</Link></LoginButton>
        </div>
    )
}
export default LoginBut;