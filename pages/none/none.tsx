import { NextPage } from "next";
import { UserVerifyForm } from "../../components/molecules/userVerifyForm";
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { Dashboard } from "../../components/layouts/dashboard";


const None: NextPage = () =>{
    const {user} = useContext(userContext);
    return(
        <>
            <Dashboard>    
                <UserVerifyForm />
            </Dashboard>
        </>
    )
}

export default None