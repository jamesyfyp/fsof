import { Box, Label, Text} from "theme-ui"
import { complaintCause } from "./ccc"



export  const CccDisplay = (props: complaintCause) => {
    return(
        <>
        <Box p={[1,2]}bg='secondary' as="form" marginY={[1,2,3,4,5]}   sx={{
                width: ['80%', '75%', '65%','50%'],
                margin: 'auto',
                borderRadius: '10px',
                justifyContent: "center",
                boxShadow: "10px 10px",
                boxShadodColor: "lightgrey"
            }}>
            <Label htmlFor="complaint">
                Complaint
            </Label>
                <Text p={3}>
                    {props.complaint}
                </Text>
            <Label htmlFor="cause">
                Cause
            </Label>
                <Text p={3}>
                    {props.cause}
                </Text>
            <Label htmlFor="correction">
                Correction
            </Label>
                <Text p={3}>
                    {props.correction}
                </Text>
        </Box>
        </>
    )
}