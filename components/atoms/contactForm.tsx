import { Label, Input, Textarea, Button, Text, Box } from 'theme-ui'
import { useForm } from "react-hook-form"

interface ContactFormInputs {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    about: string;
}


export const ContactForm = () => {
    
    const {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<ContactFormInputs>( );
    
    const onSubmit = (data: ContactFormInputs) => {
        let message = {
            data
          }
          
          fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(message)
          }).then((res) => {
              console.log('Response received')
              if (res.status === 200) {
                console.log('Response succeeded!')
              }
            })
    }
    
    return(
        <Box as="form" variant="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="firstName">
                First Name
            </Label>
            <Input {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })}/>
            {errors?.firstName?.type === "required" && <p>this field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <Label htmlFor="lastName">
                Last Name
            </Label>
            <Input {...register("lastName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })}/>
            {errors?.lastName?.type === "required" && <p>this field is required</p>}
            {errors?.lastName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <Label htmlFor="companyname">
                Company Name
            </Label>
            <Input {...register("companyName", {required: true} )} />
            {errors?.lastName?.type === "required" && <p>this field is required</p>}
            <Label htmlFor="email">
                E-mail
            </Label>
            <Input {...register("email", {required: true} )}/>
            {errors?.lastName?.type === "required" && <p>this field is required</p>}
            <Label htmlFor="phonenumber">
                Phone Number
            </Label>
            <Input {...register("phoneNumber",{
                required: true,
                pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            })}/>
            {errors?.phoneNumber?.type === "required" && <p>this field is required</p>}
            {errors?.lastName?.type === "pattern" && (
                <p>123-456-7890 format please</p>
            )}
            <Label htmlFor="about">
                Tell us about your needs
            </Label>
            <Textarea 
            defaultValue="Some information about your
             fleet vehicles would be nice :)"
            {...register("about")} />
            <Button type="submit">
                Say Hello
            </Button>
        </Box>
    )
}