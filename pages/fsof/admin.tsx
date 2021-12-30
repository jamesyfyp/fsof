import { NextPage } from "next";
import { Flex  } from "@theme-ui/components";
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { Dashboard } from "../../components/layouts/dashboard";
import { GetServerSideProps } from "next";
import { PendingUserDb } from "../../components/molecules/pendingUserDb";
import { DashBoardTile } from "../../components/molecules/dashBoardTile";
import { NewCustomer } from "../../components/molecules/newCustomer";
import { ButtonLink } from "../../components/atoms/ButtonLink"

let links = [
  {
      link: '/newWalkAround',
      text: "New Walk Around",
      buttonVariant: "LogoButton",
  } ,
  {
      link: '/services',
      text: "Services",
      buttonVariant: "LogoButton",
  } ,
  {
      link: '/contact',
      text: "Contact",
      buttonVariant: "LogoButton",
  }
]


const Admin: NextPage = (props: any) =>{
  const {user} = useContext(userContext);
  return(  
  <Dashboard >
    <Flex m="auto" paddingTop={[1,1,2,3,4]} sx={{
      width: '80%',
      justifyContent: 'center'
  }}>
      {links.map((link, i) =><ButtonLink buttons={link} key={i}/>)}
  </Flex>   
      <Flex marginX={[1,2,3,4,5]} paddingY={[1,1,2,3,4]} sx={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        columnCount: [1,1,2,3],
        rowGap: "1rem"
        }}>
        <DashBoardTile name="Peding Users" >
          {props.newUser.map((x: any,i: any)=>{
            return(
              <PendingUserDb person={x} key={i} />
            )
          })}
        </DashBoardTile>
        <DashBoardTile name="New Customers">
          {props.newCustomer.map((x: any,i: any)=>{
              return(
                <NewCustomer person={x} key={i} />
              )
            })}
        </DashBoardTile>
        <DashBoardTile name="Pending Walk Arounds" />
        <DashBoardTile name="New Inovices" />
      </Flex>      
    </Dashboard>  
  )
}

export const getServerSideProps: GetServerSideProps = async ({  res }) => {
  const [newUserRes, newCustomerRes] = await Promise.all([
    fetch(`${process.env.APP_DOMAIN}api/userVerifyAdmin`, {method: "GET"}),
    fetch(`${process.env.APP_DOMAIN}api/contactForm`, {method: "GET"}),
  ]);
  const [ newUser, newCustomer ] = await Promise.all ([
    newUserRes.json(),
    newCustomerRes.json()
  ])
    return { props: {newUser, newCustomer}}
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
}




*/