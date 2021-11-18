import { Box, Flex, Heading } from "@theme-ui/components"
import Image from "next/image"
import logo from "../../public/fsofLogo.png"

export  const Dashboard = ({children}: any) => {
    return (
        <>
            <Box sx={{
                width: "100%"
                }}>
                <Flex bg="secondary">
                    <Box sx={{
                        width: "6em"
                        }}>
                        <Image src={logo} alt="logo" layout="responsive" />
                    </Box>
                    <Heading sx={{
                        fontSize: [3,4,5],
                        width: "12rem",
                        margin: "2rem"
                    }}>Dashboard</Heading>
                </Flex>
                {children}
            </Box>
        </>
    )
}