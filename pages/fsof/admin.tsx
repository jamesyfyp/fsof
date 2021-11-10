import { NextPage } from "next";
import {  } from "@theme-ui/components";
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import router from "next/router";
import { Dashboard } from "../../components/layouts/dashboard";

const Admin: NextPage = () =>{
    const {user} = useContext(userContext);
    if (user.user === false) {
        router.push('/login')
    }
    return(
        <Dashboard >
            <h1>{user.email}</h1>
        </Dashboard>
    )
}

export default Admin