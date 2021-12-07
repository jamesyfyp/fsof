import { NextPage } from "next";
import { Heading  } from "@theme-ui/components";
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { Dashboard } from "../../components/layouts/dashboard";
import { GetServerSideProps } from "next";
import { PendingUserDb } from "../../components/molecules/pendingUserDb";



const Admin: NextPage = (props: any) =>{
    const {user} = useContext(userContext);
    return(
        <Dashboard >
            <Heading>New Users</Heading>
            {props.data.map((x:any, i:any ) => <PendingUserDb props={x} key={i} />)}
            <Heading>New Customers</Heading>
            
        </Dashboard>  
    )
}

export const getServerSideProps: GetServerSideProps = async ({  res }) => {
    const response = await fetch(`${process.env.APP_DOMAIN}api/userVerifyAdmin`, {method: "GET"})
    const data = await response.json()
   
    if (!data) {
      return {
        notFound: true
      }
    }
    return { props: {data} }
}    

export default Admin

//need for later array destructuring  for multiple request
/*export async function getServerSideProps() {
    const [operationsRes, incidentsRes] = await Promise.all([
      fetch(`${process.env.APP_DOMAIN}/api/${apiRoute}`), 
      fetch(`${process.env.APP_DOMAIN}/api/${apiRoute2}`)
    ]);
    const [operations, incidents] = await Promise.all([
      operationsRes.json(), 
      incidentsRes.json()
    ]);
    return { props: { operations, incidents } };
}*/