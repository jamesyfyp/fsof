
import { useState } from "react"
import {Box, Heading,  Close, Button, Flex} from "theme-ui"

export  const DashBoardTile = (props: any) => {
    const [closed, setClosed] = useState(false);

    if (closed === false) {
        return(
            <Box paddingY=".4rem"bg={"reallylight" }sx={{
                alignSelf: "left",
                borderRadius: "1rem",
                justifyContent: "left"
            }}>
                <Close paddingBottom=".1rem"color="secondary" onClick={ ( ) => setClosed(true) } sx={{
                    position: "absolute",
                    right: [1,2,3,4,5],
                    

                }} />
                <Heading paddingLeft=".25rem" color="secondary">
                    {props.name}
                </Heading>
                {props.children}
        </Box>
        ) 
    } else if ( closed === true) {
        return(
            <Flex>
                <Heading sx={{
                    marginLeft:"0",
                    padding:".2rem",
                    

                }}>
                        {props.name}
                </Heading>
                <Button onClick={ ( ) => setClosed(false)} sx={{
                    padding:".25rem",
                    marginLeft:".1rem",
                    marginX: ".2rem",
                    alignSelf: "left"
                }}>
                    +
                </Button>
                
            </Flex>
        )
    }
    return (
        <></>
    )
}