import { NextPage } from "next"
import { LoginForm } from "../components/molecules/loginForm"
import { LandingPageLayout } from "../components/layouts/landingPageLayout"


const Contact: NextPage = () =>{
    return (
        <>
            <LandingPageLayout>
                <LoginForm />
            </LandingPageLayout>
        </>
    )
}

export default Contact