import { Label, Input, Button, Text, Box, Flex } from 'theme-ui'
import router, { useRouter } from 'next/router'
import { useForm } from "react-hook-form"
import { Magic } from 'magic-sdk'
import { useContext } from 'react'
import React from 'react'
import { userContext } from '../../context/userContext'
import { loadingContext } from '../../context/loading'
import { Loading } from '../atoms/loading'

interface LoginFormInputs {
    email: string
}

export const LoginForm = ( ) => {
    const Router = useRouter();
    const {user, setUser} = useContext(userContext);
    const { loading, setLoading} = useContext(loadingContext)

    const {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<LoginFormInputs>( );

    const onSubmit = async (data: LoginFormInputs) => {
        setLoading(true)
        const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
       .auth
       .loginWithMagicLink({ email: data.email })
    
        const authRequest = await fetch("/api/login", {
            method: "Post",
            headers: { Authorization: `Bearer ${did}` },
        }).then(response => response.text()) 
        .then((dataStr) => {
            let data = JSON.parse(dataStr);
            let authed = document.cookie.split('=')[1] === "true" ? true : false;
            setUser( authed, data.role, data.company, data.issuer, data.email, data.name )
        }).then( () =>{
            router.push(`${user.company}/${user.role}`)
        })

    }
    if (loading.loading === false ) {
        return (
        <Box id="loginForm"p={[1,2]}bg='secondary' as="form" marginY={[1,2,3,4,5]}  onSubmit={handleSubmit(onSubmit)} sx={{
            width: ['80%', '75%', '65%','50%'],
            margin: 'auto',
            borderRadius: '10px',
            justifyContent: "center",
            boxShadow: "10px 10px",
            boxShadodColor: "lightgrey"
        }}>
            <Label htmlFor="email">
                E-mail
            </Label>
            <Input id="email"{...register("email", {
                required: true,
            })}/>
            {errors?.email?.type === "required" && <Text variant="formError">! this field is required</Text>}
            <Flex marginY={[1,2,3,4,5]} sx={{
                justifyContent: 'center',
            }}>
            <Button type="submit" variant="ContactButton">
                Login or Register
            </Button>
            </Flex>
        </Box>
        )   
    }
    if ( loading.loading === true ) { return(<Loading />)}
}