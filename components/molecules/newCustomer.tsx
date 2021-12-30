import { Box, Heading, Text, Button } from "@theme-ui/components"
import {useState} from "react"
import router from "next/router";

export const NewCustomer = (props: any) =>{
    const [ deleteWarning, setDeleteWarning ] = useState(false);
    
    const updateLastContacted = async ( ) =>{
        
       let body = {
           id: props.person.id,
           timesContacted: props.person.timesContacted
       }
        const Patch = await fetch("/api/contactForm", {
            method : "PATCH",
            body: JSON.stringify(body)
        });
        router.reload()
    }

    const permenentlyDelete = async () => {
        const Delete = await fetch("/api/contactForm", {
            method : "DELETE",
            body: `${props.person.id}`
        });
    }

    const deleteLead = ( ) =>{
        setDeleteWarning(true)
    }

    const dontDeleteLead = () =>{
        setDeleteWarning(false)
    }
    
    if (deleteWarning === false ){ 
        return(    
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [1,2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[1,2,3]}>
                        <Heading>{props.person.firstName} {props.person.lastName}</Heading>
                    </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Company: {props.person.CompanyName}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Phone: {props.person.PhoneNumber}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Email: {props.person.userEmail}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        message: {props.person.message}
                    </Text>
                </Box>
                <Box m={[1,2,3]} paddingBottom={[1,2,3]} >
                    <Button  onClick={()=>updateLastContacted()}>
                        Contacted
                    </Button>
                    <Button marginX={[1,2,3]} onClick={()=>deleteLead()}>
                            Delete
                    </Button>
                </Box>
            </Box>
        )
    } else if(deleteWarning === true) {
        return(
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [1,2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[1,2,3]}>
                        <Heading>Are you sure want to delete {props.person.firstName} {props.person.lastName}</Heading>
                    </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Company: {props.person.CompanyName}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Phone: {props.person.PhoneNumber}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        Email: {props.person.userEmail}
                    </Text>
                </Box>
                <Box m={[1,2,3]}>
                    <Text>
                        message: {props.person.message}
                    </Text>
                </Box>
                <Box m={[1,2,3]} paddingBottom={[1,2,3]} >
                    <Button bg="black" onClick={()=>permenentlyDelete()}>
                        Delete permanently 
                    </Button>
                    <Button bg="black" marginX={[1,2,3]} onClick={()=>dontDeleteLead()}>
                            go back
                    </Button>
                </Box>
            </Box>
        )
    } 
    return ( <></>)
}

/* firstName            String @db.VarChar(255)
lastName            String @db.VarChar(255)
CompanyName  String @db.VarChar(255)
PhoneNumber    String @db.VarChar(255)
userEmail           String @db.VarChar(255)   
message              String @db.VarChar(1000)
lastContacted     DateTime @default(now()) */