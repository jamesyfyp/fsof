import { Box, Label, Button, Grid, Input,  Heading } from "theme-ui"
import { useForm} from "react-hook-form"


export interface Batteries {
    eRatedCCA: number,
    eCCA: number,
    eRatedVoltage: number,
    eVoltage: number,
    brand: string,
    partNumber: string,
    nCCA: number,
    nVoltage: number
}


export  const Batteries = ({setData, display}: any) =>{
    const  {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<Batteries>( );

    const onSubmit = (data: Batteries) =>{
        setData(data)
    }

    if (display === true ) return (
        <Box id="batteryDataInputs" p={[1,2,3]} bg='secondary' as="form" marginTop="0" marginBottom="200px" onSubmit={handleSubmit(onSubmit)} sx={{
            width: ['80%', '75%', '65%','50%'],
            margin: 'auto',
            borderRadius: '10px',
            justifyContent: "center",
            boxShadow: "10px 10px",
            boxShadodColor: "lightgrey"
        }}>
    <Heading marginY={[1,2,3]}>Battery Replacement Form</Heading>
        <Label p={[1,2]}htmlFor="eCca" >
            Existing rated CCA
        </Label>
        <Input p={[1,2]} id="eRatedCCA"{...register("eRatedCCA", {
            required: true
        })}/>
        <Label p={[1,2]} htmlFor="eRatredCca"  >
            Existing Current CCA
        </Label>
        <Input p={[1,2]} id="eCCA"{...register("eCCA", {
            required: true,
        })}/>
        <Label p={[1,2]} htmlFor="eRatedVoltage">
            Existing rated voltage
        </Label>
        <Input p={[1,2]} id="eRatedVoltage"{...register("eRatedVoltage", {
            required: true
        })}/>
        <Label p={[1,2]} htmlFor="eVoltage" >
            Existing Current Voltage
        </Label>
        <Input p={[1,2]} id="eVoltage"{...register("eVoltage", {
            required: true
        })}/>
        <Label p={[1,2]} htmlFor="brand" >
            Brand
        </Label>
        <Input p={[1,2]} id="brand"{...register("brand", {
            required: true
        })}/>
        <Label p={[1,2]} htmlFor="nCCa" paddingRight="5%" >
            New Battery CCA
        </Label>
        <Input p={[1,2]}  id="nCCA"{...register("nCCA", {
            required: true
        })}/>
    </Box>
    )
    return(<></>)
}
