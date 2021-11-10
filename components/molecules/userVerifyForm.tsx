import { Label, Input, Textarea, Button, Text, Box, Flex } from 'theme-ui'
import { useForm } from "react-hook-form"
import { userContext } from '../../context/userContext'
import { useContext } from 'react'

interface VerifyFormInputs {
    firstName: string;
    lastName: string;
    companyName: string;
    phoneNumber: string;
    about: string;
}


export const UserVerifyForm = (  ) => {
    
    const {user} = useContext(userContext);
    
    const {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<VerifyFormInputs>( );
    
    

    const onSubmit = async (data: VerifyFormInputs) => {
        let reqBody = {
                firstName: data.firstName,
                lastName: data.lastName,
                CompanyName: data.companyName,
                PhoneNumber: data.phoneNumber,
                userEmail: user.email,
                userDID: user.did
        }
        const authRequest = await fetch("/api/userVerification", {
            method: "Post",
            body: JSON.stringify(reqBody)
        })
    }
    
    return(
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
            <Input {...register("companyName", {required: true} )} />
            {errors?.lastName?.type === "required" && <Text variant="formError">! this field is required</Text>}
            <Label htmlFor="phonenumber">
                Phone Number
            </Label>
            <Input {...register("phoneNumber",{
                required: true,
                pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            })}/>
            {errors?.phoneNumber?.type === "required" && <Text variant="formError">! this field is required</Text>}
            {errors?.phoneNumber?.type === "pattern" && (
                <Text variant="formError">! 123-456-7890 format please</Text>
            )}
            <Label htmlFor="about">
                What do you need acess to?
            </Label>
            <Textarea rows={8}
            defaultValue="How are you related to a business we work with"
            {...register("about")} />
            <Flex marginY={[1,2,3,4,5]} sx={{
                justifyContent: 'center',
            }}>
            <Button type="submit" variant="ContactButton">
                 Submit
            </Button>
            </Flex>
        </Box>
    )
}