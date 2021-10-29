import { Card, Box, Heading,  jsx } from "theme-ui"
import Image from "next/image"

export  const Cards = (props : {image: StaticImageData, text: string}) => {
    return (
        <Card p="0" m={[1,2,3,4,5]} bg="secondary" sx={{
            width: ["100%", "100%",  "100%", "30%", "25%", "20%" ],
            borderRadius:"10px"
        }}>
            <Box bg="#F2F2F2" sx={{
                borderRadius: "10px",
                overflow: 'hidden'
            }}>
            <Image src={props.image} alt={props.text} layout="responsive"/>
            </Box>
            <Heading paddingY={[.5]}marginY={[1,2,3,4,5]}>
                {props.text}
            </Heading>
        </Card>
    )
}