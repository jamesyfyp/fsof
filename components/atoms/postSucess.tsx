import {Box, Heading} from 'theme-ui'

export const Success = (props: any ) => {
    return (
        <Box sx={{
            width: "80%",
            margin: "auto",
            paddingTop: "5%",
            textAlign: "center"
        }}>
            <Heading>
                {props.text}
            </Heading>
        </Box>
    )
}