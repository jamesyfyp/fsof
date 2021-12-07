import { NextPage } from "next"
import { ContactFormComponent } from "../components/molecules/contactForm"
import { LandingPageLayout } from "../components/layouts/landingPageLayout"

const Contact: NextPage = () =>{
    return (
        <>
        <LandingPageLayout>
            <ContactFormComponent />
        </LandingPageLayout>
        </>
    )
}

export default Contact