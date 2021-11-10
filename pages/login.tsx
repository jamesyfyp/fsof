import { NextPage } from "next"
import { LoginForm } from "../components/molecules/loginForm"
import { LogoHeading } from "../components/organism/LogoHeading"


const Contact: NextPage = () =>{
    return (
        <>
            <LogoHeading />
            <LoginForm />
        </>
    )
}

export default Contact