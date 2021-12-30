import { Label, Input, Textarea, Button, Text, Box, Flex } from 'theme-ui'
import { useForm } from "react-hook-form"
import { loadingContext } from '../../context/loading'
import { Loading } from '../atoms/loading'
import {useContext, useState } from 'react'
import { ContactForm } from '.prisma/client'
import { Success } from '../atoms/postSucess'

export const ContactFormComponent = () => {
    const { loading, setLoading} = useContext(loadingContext)
    const [submited, setSubmitted ] = useState(false)

    const submitStatusChange = () => setSubmitted(!submited)
    
    const {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<ContactForm>( )
    
    const onSubmit  = async (data: ContactForm) => {
        setLoading(true)
        submitStatusChange()
          
          const response = await fetch('/api/contactForm', {
              method: 'POST',
              body: JSON.stringify(data)
          }).then((response) => {if(response.status === 200) { setLoading(false)}} )
    }
     if (loading.loading === false && submited === false)  {
            return (
            <Box id="contactForm"p={[1,2]}bg='secondary' as="form" marginY={[1,2,3,4,5]}  onSubmit={handleSubmit(onSubmit)} sx={{
                width: ['80%', '75%', '65%','50%'],
                margin: 'auto',
                borderRadius: '10px',
                justifyContent: "center",
                boxShadow: "10px 10px",
                boxShadodColor: "lightgrey"
            }}>
                <Label htmlFor="firstName">
                    First Name
                </Label>
                <Input id="firstName"{...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}/>
                {errors?.firstName?.type === "required" && <Text variant="formError">! this field is required</Text>}
                {errors?.firstName?.type === "maxLength" && (
                    <Text variant="formError">! First name cannot exceed 20 characters</Text>
                )}
                {errors?.firstName?.type === "pattern" && (
                    <Text variant="formError">! Alphabetical characters only</Text>
                )}
                <Label htmlFor="lastName">
                    Last Name
                </Label>
                <Input {...register("lastName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}/>
                {errors?.lastName?.type === "required" && <Text variant="formError">! this field is required</Text>}
                {errors?.lastName?.type === "maxLength" && (
                    <Text variant="formError">! First name cannot exceed 20 characters</Text>
                )}
                {errors?.lastName?.type === "pattern" && (
                    <Text variant="formError">! Alphabetical characters only</Text>
                )}
                <Label htmlFor="companyname">
                    Company Name
                </Label>
                <Input {...register("CompanyName", {required: true} )} />
                {errors?.lastName?.type === "required" && <Text variant="formError">! this field is required</Text>}
                <Label htmlFor="email">
                    E-mail
                </Label>
                <Input {...register("userEmail", {required: true} )}/>
                {errors?.userEmail?.type === "required" && <Text variant="formError">! this field is required</Text>}
                <Label htmlFor="phonenumber">
                    Phone Number
                </Label>
                <Input {...register("PhoneNumber",{
                    required: true,
                    pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                })}/>
                {errors?.PhoneNumber?.type === "required" && <Text variant="formError">! this field is required</Text>}
                {errors?.PhoneNumber?.type === "pattern" && (
                    <Text variant="formError">! 123-456-7890 format please</Text>
                )}
                <Label htmlFor="about">
                    Tell us about your needs
                </Label>
                <Textarea rows={8}
                defaultValue="Some information about your
                    fleet vehicles would be nice :)"
                {...register("message", {
                    required: true,
                }) } />
                {errors?.PhoneNumber?.type === "required" && <Text variant="formError">! this field is required</Text>}
                <Flex marginY={[1,2,3,4,5]} sx={{
                    justifyContent: 'center',
                }}>
                <Button type="submit" variant="ContactButton">
                    Say Hello
                </Button>
                </Flex>
            </Box>
        )} 
        
        if ( loading.loading === true ) { return( <Loading /> )}
        if ( submited === true ) { return(<Success  text='Thanks for reaching out! Someone will contact you in the next few business days'/>)}
        else {return(<></>  )}
}