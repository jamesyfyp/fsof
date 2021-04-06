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
class ContactForm extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            companyName:'',
            contactName:'',
            email:'',
            contactNumber:'',
            message:'',
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this)           
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.state)
    }
    

    render() {  
        return(
            <FormWrapper>
                <Form>
                    <Lable>Company Name:</Lable><br></br>
                    <Input
                        type="text" 
                        name="companyName"
                        value={this.state.input}
                        onChange={this.handleInputChange}></Input><br></br>
                    <Lable>Contact Name:</Lable><br></br>
                    <Input 
                        type="text" 
                        name="contactName"
                        value={this.state.input}
                        onChange={this.handleInputChange}></Input><br></br>
                    <Lable>Email:</Lable><br></br>
                    <Input 
                        type="email" 
                        name="email"
                        value={this.state.input}
                        onChange={this.handleInputChange}></Input><br></br>
                    <Lable>Contact Number:</Lable><br></br>
                    <Input 
                        type="text" 
                        name="contactNumber"
                        value={this.state.input}
                        onChange={this.handleInputChange}></Input><br></br>
                    <Lable>Message:</Lable><br></br>
                    <TextArea
                        type="text" 
                        name="message"
                        value={this.state.input}
                        onChange={this.handleInputChange}/><br></br>
                    <SubmitButton
                        onClick={this.handleClick} 
                        type="submit" 
                        value="Submit"
                        >Say Hello!</SubmitButton>
                </Form>       
            </FormWrapper>
        );
    }
}
export default ContactForm