import { NextPage } from "next"
import { ContactForm } from "../components/molecules/contactForm"
import { LandingPageLayout } from "../components/layouts/landingPageLayout"

const Contact: NextPage = () =>{
    return (
        <>
        <LandingPageLayout>
            <ContactForm />
        </LandingPageLayout>
        </>
    )
}

export default Contact