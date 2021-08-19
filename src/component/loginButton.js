import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import LoginModal from './loginModal';

const customStyles = {
    content : {
        //width: '200px',
        //hiegth: '400px',   
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'grey'      
    }
};

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

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const subLogin = async(e) => {
        e.preventDefault();
        try{
            const body = {
                email: email,
                password: password
            }
            const response = await fetch('http://localhost:5000/auth/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response.body)
            props.tokenSet(response.body)
        } catch (err){
            console.error(err.message)
        }
    }

    let handleEmailInput = e => {
        setEmail(e.target.value)
    };

    let handlePasswordInput = e => {
        setPassword(e.target.value)
    }

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <LoginButton onClick={setModalIsOpenToTrue}>Login</LoginButton>
            
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <LoginModal
                    password={password}
                    email={email}
                    handleEmailInput={handleEmailInput}
                    handlePasswordInput={handlePasswordInput}
                    subLogin={subLogin}
                 />
            </Modal>
        </>
    )
}
export default LoginBut;