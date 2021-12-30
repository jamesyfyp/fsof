import { Box, Grid, Label, Text} from "theme-ui"
import { Tires } from "./tires"



export  const TireDisplay = ({tires, tiresDisplay} : any) => {
    if(tiresDisplay === true){
        return(
            <Box p={[1,2]}bg='secondary' as="form" marginY={[1,2,3,4,5]}   sx={{
                    width: ['80%', '75%', '65%','50%'],
                    margin: 'auto',
                    borderRadius: '10px',
                    justifyContent: "center",
                    boxShadow: "10px 10px",
                    boxShadodColor: "lightgrey"
                }}>
                <Label htmlFor="complaint">
                    Brand
                </Label>
                    <Text p={3}>
                        {tires.brand}
                    </Text>
                <Label htmlFor="cause">
                    size
                </Label>
                    <Text p={3}>
                        {tires.size}
                    </Text>
                <Label htmlFor="correction">
                    Part Number
                </Label>
                    <Text p={3}>
                        {tires.partNumber}
                    </Text>
                <Label>
                    tire sizes
                </Label>
                <Grid margin={[1,2,3]} width={[.3, .3, .3]}>
                    <Box>
                       <Text>
                            fr: {tires.fr}
                       </Text>
                    </Box>
                    <Box>
                       <Text>
                            fl: {tires.fl}
                       </Text>
                    </Box>
                    <Box>
                       <Text>
                            rr: {tires.rr}
                       </Text>
                    </Box>
                    <Box>
                       <Text>
                            rl: {tires.rl}
                       </Text>
                    </Box>
                </Grid>
            </Box>
        )
    }
    return(<></>)
}