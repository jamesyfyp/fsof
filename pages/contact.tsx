import { NextPage } from "next"
import { ContactForm } from "../components/molecules/contactForm"
import { LogoHeading } from "../components/organism/LogoHeading"

const Contact: NextPage = () =>{
    return (
        <>
        <LogoHeading/>
        <ContactForm />
        </>
    )
}

export default Contact