import { Box } from "@theme-ui/components"

export  const Dashboard = ({children}: any) => {
    return (
        <>
            <Box sx={{
                width: "100%"
                }}>
                {children}
            </Box>
        </>
    )
}