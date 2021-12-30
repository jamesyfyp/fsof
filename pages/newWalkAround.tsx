import { NextPage } from "next";
import { Dashboard } from "../components/layouts/dashboard";
import { Heading, Button, Flex } from "theme-ui"
import { useEffect, useState } from "react"
import { VehicleData } from "../components/organism/walkarounds/vehicleData";
 import { CCC } from "../components/organism/walkarounds/ccc";
import { CccDisplay } from "../components/organism/walkarounds/cccDisplay";
import { complaintCause } from "../components/organism/walkarounds/ccc";
import { Tires } from "../components/organism/walkarounds/tires"
import { TireDisplay } from "../components/organism/walkarounds/tireDisplay"
import { Batteries } from "../components/organism/walkarounds/batteries";


const NewWalkAround: NextPage = () =>{
    const [ cccState, setCccState ] = useState(false)
    const [ vDataState, setVDataState ] = useState(true)
    const [ tireState, setTireState ] = useState(false)
    const [ displayTireData, setDisplayTireData ] = useState(false)
    const [ batteryState, setBatteryState ] = useState(false)
    
    const [ vehicleData, setVehicleData ] = useState({
        vin: "",
        mileage: 0,
        tag: "",
        customer: ""
    })
    
    const [ ccc, setCcc ] = useState<complaintCause[]>([])

    const [ tireData, setTireData ] = useState({
        fl: 0,
        fr: 0,
        rl: 0,
        rr: 0,
        rl2: 0,
        rr2: 0,
        brand: "",
        size: "",
        partNumber: ""
    })

    const tData = ( x: Tires) => {
        setTireData( x)
        setCccState(true)
        setTireState(true)
        setDisplayTireData(true)
    }

    const vData = ( vin: string, mileage: number, tag: string, customer:string) => {
        setVehicleData( { 
            vin: vin,
            mileage: mileage,
            tag: tag, 
            customer: customer 
        })
        setVDataState(false)
        setCccState(true)
    }

    const cccData = (x: complaintCause) => {
        setCcc( [...ccc, { 
            complaint: x.complaint,
            cause: x.cause,
            correction: x.correction, 
        }])
        setVDataState(false)
        setCccState(true)
    }


   if (vDataState === true ){
       return(
            <Dashboard>
                <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
                <VehicleData setData={vData} />
            </Dashboard>
       )
   } 
   if (cccState === true ){
    return( 
        <Dashboard> 
            <Heading p={[1,2,3]}sx={{textAlign: "center"}}>New Walk Around</Heading>
            <Flex paddingBottom={[1,2,3]} sx={{
                justifyContent: 'center',
            }}>
            <Button type="submit" variant="ContactButton" onClick={() => {
                setTireState(true)
                setCccState(false)
            } 
                } >
                Tires
            </Button>
            <Button  onClick={() => {
                 setBatteryState(true)
                 setCccState(false)
            }} variant="ContactButton">
                Batteries
            </Button>
            </Flex>
            <CCC  setData={cccData} />            
            <TireDisplay tires={tireData} tiresDisplay={displayTireData}/>
            {ccc.map((x,i)=>{
                return(
                    <CccDisplay complaint={x.complaint} cause={x.cause} correction={x.correction} key={i}/>
                )
            })}
        </Dashboard>
    )
} 
if (tireState === true ){
    return( 
        <Dashboard>
            <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
            <Tires display={tireState} setData={tData}/>
        </Dashboard>
    )
} 

if (batteryState === true ){
    return( 
        <Dashboard>
            <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
            <Batteries display={batteryState} setData={tData}/>
        </Dashboard>
    )
} 
   return(<></>)
} 

export default NewWalkAround