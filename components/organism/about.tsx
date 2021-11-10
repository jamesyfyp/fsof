import {Box, jsx, Flex, Heading, Paragraph, Button} from 'theme-ui'
import Image from "next/image"
import services from "/public/landingPage.svg"

export const About = () => {
    return (
        <Box m='auto'sx={{
            width: ['90%', '90%', '100%']
        }}> 
            <Heading color="reallylight" m={[1,1.5,2,3,4]} paddingY={[1,1,1,2,2,3]} sx={{
                textAlign: "center",
            }}>
                Your Complete Fleet Maintenence Soloution
            </Heading>
            <Flex m={[1.5,1.5,1,2,2,3]} paddingY={[1,1,1,2,2,3]} sx={{
                flexDirection: ['column', 'column', 'row'],
                
            }}>
                <Flex bg="reallylight" marginRight="2%" marginBottom={[2, 2 ,0]} sx={{
                        width: ['100%', '100%', '50%'],
                        borderRadius: "10px",
                        alignItems:"center"
                }}>   
                    <Paragraph variant="about" color="background">
                        Are you tired of losing vehicle uptime?
                        Paying drivers to sit at shops?
                        Leaving vehicles for  days or weeks at dealerships? 
                        Look no further! 
                        Check out  our comprehensive vehicle maintenance program
                    </Paragraph>
                </Flex>
                <Box sx={{
                    width: ['100%', '100%','50%'],
                    borderRadius: "10px",
                    overflow: "hidden"
                }} >
                    <Image src={services} alt="services" layout="responsive" />  
                </Box>
            </Flex>
        </Box> 
    )
}