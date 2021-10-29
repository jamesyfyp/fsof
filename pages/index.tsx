import type { NextPage } from 'next'
import Head from 'next/head'
import { ContactForm } from '../components/atoms/contactForm'
import { About } from '../components/organism/about'
import { LogoHeading } from '../components/organism/LogoHeading'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fleets Services of Florida</title>
        <meta name="Fleet Services of Florida" content="Offical FSOF web app" />
        <link rel="logo" href="../public/fsofLogo.png" />
      </Head>
      <LogoHeading />
      <About /> 
      <ContactForm></ContactForm>
      <div id="contact-modal-root"></div>
      <div id="login-modal-root"></div>
    </>
  )
}

export default Home
