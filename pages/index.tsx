import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/organism/about'
import { LandingPageLayout } from '../components/layouts/landingPageLayout'

const Home: NextPage = () => {

  return (
    <>
    <LandingPageLayout>
        <Head>
          <title>Fleets Services of Florida</title>
          <meta name="Fleet Services of Florida" content="Offical FSOF web app" />
          <link rel="logo" href="../public/fsofLogo.png" />
        </Head>
        <About /> 
      </LandingPageLayout>
    </>
  )
}

export default Home
