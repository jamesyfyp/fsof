import React, {  useState } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';



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

const TextArea = styled.textarea`
    resize: none;
    font-size: 20px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    height: 100px;
    background-color:#CAE9FF;
    color: #1B4965;
    width: 280px;
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
const ContactForm = (props) => {  
    
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [message, setMessage] = useState('');
     
    
    const subForm = async(e) => {
        e.preventDefault();
        props.setContacted(props.contacted)

        try {
            const body = {
                companyname: companyName,
                contactname: contactName,
                email: email,
                contactnumber: contactNumber,
                message: message
            };
            const response = await fetch('http://localhost:5000/lpcontact', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch (err){
            console.error(err.message)
        } 
    }

    const handleCompanyNameInput = e => {
        setCompanyName(e.target.value)
    }  
    
    const handleContactNameInput = e => {
        setContactName(e.target.value)
    }   

    const handleEmailInput = e => {
        setEmail(e.target.value)
    }   

    const handleContactNumberInput = e => {
        setContactNumber(e.target.value)
    }   

    const handleMessageInput = e => {
        setMessage(e.target.value)
    }   

    return(
        <FormWrapper>
            <Form >
                <Lable>Company Name:</Lable><br></br>
                <Input
                    type="text" 
                    name="companyName"
                    value={companyName}
                    onChange={handleCompanyNameInput}></Input><br></br>
                <Lable>Contact Name:</Lable><br></br>
                <Input 
                    type="text" 
                    name="contactName"
                    value={contactName}
                    onChange={handleContactNameInput}></Input><br></br>
                <Lable>Email:</Lable><br></br>
                <Input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleEmailInput}></Input><br></br>
                <Lable>Contact Number:</Lable><br></br>
                <Input 
                    type="text" 
                    name="contactNumber"
                    value={contactNumber}
                    onChange={handleContactNumberInput}></Input><br></br>
                <Lable>Message:</Lable><br></br>
                <TextArea
                    type="text" 
                    name="message"
                    value={message}
                    onChange={handleMessageInput}/><br></br>
                <SubmitButton
                        onClick={subForm} 
                        type="submit" 
                        value="Submit"
                        >Say Hello!
                </SubmitButton>
            </Form>       
        </FormWrapper>
    )
        
}
export default ContactForm