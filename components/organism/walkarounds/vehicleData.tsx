import { Box, Label, Input, Button, Flex, Text } from "theme-ui"
import { useForm } from "react-hook-form"
import { setLoading } from "../../../context/loading";

export interface VehichleDataInputs {
    vin: string,
    mileage: number,
    customer: string
}

export  const VehicleData = ({setData}: any) =>{
    const postVehicleFormData  = async (x: VehichleDataInputs ) =>{
        const response = await fetch('/api/walkAround', {
            method: 'POST',
            body: JSON.stringify(x)
        })
        const data = await response.json()
        setData(x, data.id)
    }
    const {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<VehichleDataInputs>( );

    const onSubmit = (data: VehichleDataInputs) =>{
        postVehicleFormData(data)
    }
    return (
        <Box id="VehichleDataInputs" p={[1,2,3]}bg='secondary' as="form" marginY="0" onSubmit={handleSubmit(onSubmit)} sx={{
            width: ['80%', '75%', '65%','50%'],
            margin: 'auto',
            borderRadius: '10px',
            justifyContent: "center",
            boxShadow: "10px 10px",
            boxShadodColor: "lightgrey"
        }}>
            <Label htmlFor="other">
                Vin
            </Label>
            <Input id="other"{...register("vin", {
                required: true
            })}/>
                {errors?.vin?.type === "required" && <Text variant="formError">! this field is required</Text>}
            <Label htmlFor="mileage">
                Mileage
            </Label>
            <Input id="mileage"{...register("mileage", {
                required: true,
            })}/>
            <Label htmlFor="customer">
                Customer
            </Label>
            <Input id="customer"{...register("customer", {
                required: true,
            })}/>
            <Flex paddingTop={[1,2,3]} sx={{
                justifyContent: 'center',
            }}>
            <Button type="submit" variant="ContactButton">
                Submit
            </Button>
            </Flex>
        </Box>
    )
}