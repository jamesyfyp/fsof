import { Spinner, Box } from 'theme-ui'
export const Loading = ( ) =>{
    return (
        <Box >
            <Spinner sx={{
                width: '200px',
                height: '200px',
                display:"flex",
                marginX: "auto",
            }} />
        </Box>
    )
}