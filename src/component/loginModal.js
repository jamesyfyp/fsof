import React from 'react';
import styled from 'styled-components';


const FormWrapper = styled.div`
    display:inline-flex;
    justify-content: center;
    border-radius: 10px;
    height: auto;
    padding: .5%;
    text-align: center;
    align-items: center;
    padding-bottom: 100px;
    
`
const Form = styled.form`
    width: 300px;
    text-align: center;
    align-items: center;
    background-color: #1B4965;
    border-radius: 5px;
    justify-content: center;
    margin-top: 50px;
`

const Input = styled.input`
    font-size: 20px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    background-color:#CAE9FF;
    color: #1B4965;
    width: 240px;
`

const Lable = styled.label`  
    font-size: 25px;
    color: #CAE9FF;
`

const SubmitButton = styled.button`
    font-size: 30px;
    margin-top: 10px;
    width: 280px;
    height: 60px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom:10px;
    background-color: #CAE9FF;
    color: #1B4965;
`

const loginModal = (props) => {
    
    return (
        <FormWrapper>
            <Form>
                <Lable>email</Lable>
                <Input 
                    type="text"
                    name="email" 
                    value={props.email}
                    onChange={props.handleEmailInput} /> 
                <Lable>password</Lable>
                <Input 
                    type="text"
                    name="password" 
                    value={props.password}
                    onChange={props.handlePasswordInput} />  
                <SubmitButton type="submit" onClick={props.subLogin}>submit</SubmitButton>
            </Form>
        </FormWrapper>
    )
}

export default loginModal