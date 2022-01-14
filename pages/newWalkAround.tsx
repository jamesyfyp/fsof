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
import {VehichleDataInputs} from "../components/organism/walkarounds/vehicleData"


const NewWalkAround: NextPage = () =>{
    const [ cccState, setCccState ] = useState(false)
    const [ vDataState, setVDataState ] = useState(true)
    const [ tireState, setTireState ] = useState(false)
    const [ displayTireData, setDisplayTireData ] = useState(false)
    const [ batteryState, setBatteryState ] = useState(false)
    const [ walkAroundID, setWalkAroundID ] = useState(0)
    
    const [ vehicleData, setVehicleData ] = useState({
        vin: "",
        mileage: 0,
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

    const setTireFormData = ( x: Tires) => {
        setTireData( x)
        setCccState(true)
        setTireState(true)
        setDisplayTireData(true)
    }

    const setVehicleFormData = ( x: VehichleDataInputs, y: number) => {
        setVehicleData( { 
            vin: x.vin,
            mileage: x.mileage,
            customer: x.customer 
        })
        setWalkAroundID(y)
        setVDataState(false)
        setCccState(true)
    }

    const setCccData = (x: complaintCause) => {
        setCcc( [...ccc, { 
            complaint: x.complaint,
            cause: x.cause,
            correction: x.correction, 
        }])
        setVDataState(false)
        setCccState(true)
    }

   if (vDataState){
       return(
            <Dashboard>
                <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
                <VehicleData setData={setVehicleFormData} />
            </Dashboard>
       )
   } 
   if (cccState){
    return( 
        <Dashboard> 
            <Heading p={[1,2,3]}sx={{textAlign: "center"}}>Walk Around #{walkAroundID}</Heading>
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
            <CCC  wId={walkAroundID} setData={setCccData} />            
            <TireDisplay tires={tireData} tiresDisplay={displayTireData}/>
            {ccc.map((x,i)=>{
                return(
                    <CccDisplay complaint={x.complaint} cause={x.cause} correction={x.correction} key={i}/>
                )
            })}
        </Dashboard>
    )
} 
if (tireState){
    return( 
        <Dashboard>
            <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
            <Tires display={tireState} wId={walkAroundID} setData={setTireFormData}/>
        </Dashboard>
    )
} 

if (batteryState){
    return( 
        <Dashboard>
            <Heading p={[1,2]}sx={{textAlign: "center"}}>New Walk Around</Heading>
            <Batteries wId={walkAroundID} display={batteryState} setData={setTireFormData}/>
        </Dashboard>
    )
} 
   return(<></>)
} 

export default NewWalkAround