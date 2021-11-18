import Image from "next/image"
import logo from "/public/fsofLogo.png"
import { Flex, Box, jsx } from 'theme-ui'
import { ButtonLink } from "../atoms/ButtonLink"
import { links } from "./landingPLO/lpPropData"
import   Link  from "next/link"
import { wave } from "./landingPLO/animations"

export  const LandingPageLayout = ({children}: any) => {
    return (
        <Box>
            <Box paddingBottom={[1,2]}>
                <Box margin="auto" sx={{
                    width: ["100%", "70%", "60%", "50%", "40%"],
                    animation: `${wave} 1s linear infinite alternate`
                }}>
                    <Link href="/">
                        <a>
                            <Image priority={true} src={logo} alt="Fleet Services of Florida" layout="intrinsic"/>
                        </a>
                    </Link>
                </Box>
                <Flex m="auto" sx={{
                    width: '80%',
                    justifyContent: 'center'
                }}>
                    {links.map((link, i) =><ButtonLink buttons={link} key={i}/>)}
                </Flex>     
            </Box>
            {children}
        </Box>
    )
}