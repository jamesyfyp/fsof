import { Container, Heading, Text, Button, Select, Box, Label, Input } from "@theme-ui/components"
import router from "next/router";
import { useState, useContext, useEffect } from 'react';
import { loadingContext } from '../../context/loading'


export const PendingUserDb = (props: any) => {
    let person = props.person; //User Verification form data it needs to be checked and approved or deleted
    const [status , setStatus ]  = useState('none');
    const [ role, setRole ] = useState('user');
    const [ type, setType ] =useState('fsof');
    const [company, setCompany] = useState(`fsof`); 
    const { loading, setLoading} = useContext(loadingContext)

    // component has 3 states, over view -> delete || verify new user -> confirm action: component view states
    const cancleRequest = () => {
        setStatus('none')
    }
    const denyVerify = () => {
        setStatus('delete')
    }
    const approveVerify = () => {
        setStatus('verify')
    }
    //crud api requests
    const deny = async () => {
        const Delete = await fetch("/api/userVerifyAdmin", {
            method : "DELETE",
            body: `${person.id}`
        });
        router.reload()
    }
    const verify = async  () => {
        const upDateBody = {
            did: `${person.userDID}`,
            email: `${person.userEmail}`,
            authId: person.id,
            type: type,
            role: role,
            company: company
        };
       const Post = await fetch("/api/userVerifyAdmin", {
            method : "UPDATE",
            body: JSON.stringify(upDateBody)
        });
        router.reload()
    }
    // Com
    if (status === "none") {
        return (
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[2,3]}>
                    <Heading>{person.firstName} {person.lastName} of {person.CompanyName}</Heading>
                </Box>
                <Box m={[2,3]}>
                    <Text>Phone:{person.PhoneNumber}</Text>
                </Box>
                <Box m={[2,3]}>
                    <Text>Email:{person.userEmail}</Text>   
                </Box>
                <Box m={[2,3]} paddingBottom={[2,3]}>
                    <Button onClick={denyVerify}>Deny</Button>
                    <Button onClick={approveVerify}marginX={[2,3]}>Approve</Button>
                </Box>
            </Box>
        )
    }
    // Delete request 
    if (status === "delete") {
        return (
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[2,3]}>
                    <Heading>{person.firstName} {person.lastName} of {person.CompanyName}</Heading>
                </Box>
                <Box m={[2,3]}>
                    <Text>Phone:{person.PhoneNumber}</Text>
                </Box>
                    <Box m={[2,3]}>
                        <Text>Email:{person.userEmail}</Text>   
                    </Box>
                <Box m={[2,3]} paddingBottom={[2,3]}>
                    <Button bg={"black"} color={"reallylight"} onClick={deny} >Permenantly Delete</Button>
                    <Button bg={"black"} color={"reallylight"} marginX={[2,3]} onClick={cancleRequest}>Wait until later</Button>
                </Box>
            </Box>
        )
    }
    //verify
    if (status === "verify" &&  type === "fsof") {
        return (
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[2,3]}>
                    <Heading>{person.firstName} {person.lastName} of </Heading>
                </Box>
                <Box m={[2,3]}>
                    <Text>Phone:{person.PhoneNumber}</Text>
                </Box>
                    <Box m={[2,3]}>
                        <Text>Email:{person.userEmail}</Text>   
                </Box>
                <Label m={[2,3]} sx={{
                    paddingTop: 1
                }}>
                    User Role
                </Label>
                <Select onChange={(e)=>{setRole(e.target.value)}} m={[2,3]}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </Select>
                <Label m={[2,3]}>
                    Type
                </Label>
                <Select onChange={(e)=>{setType(e.target.value)}}m={[2,3]}>
                    <option value="fsof">FSOF</option>
                    <option value="client">Client</option>
                    <option value="shop">shop</option>
                </Select>
                <Box m={[2,3]} paddingBottom={[2,3]}>
                    <Button bg={"black"} color={"reallylight"} onClick={verify}>Approve</Button>
                    <Button bg={"black"} color={"reallylight"} marginX={[1,2,3]} onClick={cancleRequest}>Wait until later</Button>
                </Box>
            </Box>
        )
    }
    if (status === "verify" &&  type === "shop") {
        return (
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[2,3]}>
                    <Heading>{person.firstName} {person.lastName} of </Heading>
                </Box>
                <Box m={[2,3]}>
                    <Text>Phone:{person.PhoneNumber}</Text>
                </Box>
                    <Box m={[2,3]}>
                        <Text>Email:{person.userEmail}</Text>   
                </Box>
                <Label m={[2,3]} sx={{
                    paddingTop: 1
                }}>
                    User Role
                </Label>
                <Select onChange={(e)=>{setRole(e.target.value)}} m={[2,3]}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </Select>
                <Label m={[2,3]}>
                    Type
                </Label>
                <Select onChange={(e)=>{setType(e.target.value)}}m={[2,3]}>
                    <option value="fsof">FSOF</option>
                    <option value="client">Client</option>
                    <option value="shop">shop</option>
                </Select>
                <Label m={[2,3]}>
                    Company
                </Label>
                <Select onChange={(e)=>{setCompany(e.target.value)}}m={[2,3]}>
                    <option value="default">Select One</option>
                    <option value="mirimarTires">Mirimar Tires</option>
                    <option value="worldWideFleet">World Wide Fleet</option>
                </Select>
                <Box m={[2,3]} paddingBottom={[2,3]}>
                    <Button bg={"black"} color={"reallylight"} onClick={verify}>Approve</Button>
                    <Button bg={"black"} color={"reallylight"} marginX={[2,3]} onClick={cancleRequest}>Wait until later</Button>
                </Box>
            </Box>
        )
    }
    if (status === "verify" &&  type === "client") {
        return (
            <Box marginLeft=".25rem"  bg={"secondary"} color={"reallylight"} sx={{
                width: ['80%'],
                marginTop: [2,3],
                paddingTop: "1px",
                borderRadius:"1rem",
                boxShadow: "10px 10px 5px lightgrey"
            }}>
                <Box m={[2,3]}>
                    <Heading>{person.firstName} {person.lastName} of </Heading>
                </Box>
                <Box m={[2,3]}>
                    <Text>Phone:{person.PhoneNumber}</Text>
                </Box>
                    <Box m={[2,3]}>
                        <Text>Email:{person.userEmail}</Text>   
                </Box>
                <Label m={[2,3]} sx={{
                    paddingTop: 1
                }}>
                    User Role
                </Label>
                <Select onChange={(e)=>{setRole(e.target.value)}} m={[2,3]}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </Select>
                <Label m={[1,2,3]}>
                    Type
                </Label>
                <Select onChange={(e)=>{setType(e.target.value)}}m={[1,2,3]}>
                    <option value="fsof">FSOF</option>
                    <option value="client">Client</option>
                    <option value="shop">shop</option>
                </Select>
                <Label m={[1,2,3]}>
                    Company
                </Label>
                <Select onChange={(e)=>{setCompany(e.target.value)}}m={[2,3]}>
                    <option value="default">Select One</option>
                    <option value="nova">Nova</option>
                    <option value="cano">Cano</option>
                    <option value="eddHelms">Edd Helm</option>
                    <option value="safeLite">Safe Lite</option>
                    <option value="trane">Trane</option>
                </Select>
                <Box m={[2,3]} paddingBottom={[2,3]}>
                    <Button bg={"black"} color={"reallylight"} onClick={verify}>Approve</Button>
                    <Button bg={"black"} color={"reallylight"} marginX={[2,3]} onClick={cancleRequest}>Wait until later</Button>
                </Box>
            </Box>
        )
    }
    return(
        <></>
    )
}
