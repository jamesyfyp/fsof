import { NextPage } from "next";
import { UserVerifyForm } from "../../components/molecules/userVerifyForm";
import { Box, Heading, Paragraph, Text } from "@theme-ui/components";
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import router from "next/router";



const None: NextPage = () =>{
    const {user} = useContext(userContext);
    if (user.user === false) {
        router.push('/login')
    }
    return(
        <>
            <Box m={[1,2,3,4,5]}>
                <Heading>
                    Hello,
                </Heading>
                <Heading>
                    have we met?
                </Heading>
                <Paragraph m={[1,2,3,4]}>
                    We currently do not have you in our system, would you mind providing us with some additional information about yourself?
                </Paragraph>
                <UserVerifyForm />
            </Box>
        </>
    )
}

export default None