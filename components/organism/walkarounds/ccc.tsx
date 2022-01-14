import { Box, Label, Button, Flex, Textarea, Text } from "theme-ui"
import { useForm} from "react-hook-form"


export interface complaintCause {
    complaint: string,
    cause: string,
    correction: string
}


export  const CCC = ({setData}: any, wId: number) =>{
    const {
        reset,
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<complaintCause>( );

    const onSubmit = async (data: complaintCause) =>{
        const body = {
            complaint: data.complaint,
            cause: data.cause,
            correction: data.correction,
            id: wId
        }
        const response = await fetch('/api/ccc', {
            method: 'POST',
            body: JSON.stringify(body)
        }).then((res)=>{
            if(res.status === 200){
                setData(data)
                reset({
                    complaint: "",
                    cause: "",
                    correction: ""
                })
            }
        }) 
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
            <Label htmlFor="complaint">
                Complaint
            </Label>
            <Textarea  rows={6} id="complaint"{...register("complaint", {
                required: true
            })}/>
                {errors?.complaint?.type === "required" && <Text variant="formError">! this field is required</Text>}
            <Label htmlFor="cause">
                Cause
            </Label>
            <Textarea rows={6} id="cause"{...register("cause", {
                required: true,
            })}/>
            <Label htmlFor="correction">
                Correction
            </Label>
            <Textarea rows={6} id="correction"{...register("correction", {
                required: true,
            })}/>
            <Flex paddingTop={[1,2,3]} sx={{
                justifyContent: 'center',
            }}>
            <Button  type="submit" variant="ContactButton">
                New Complaint
            </Button>
            <Button  type="submit"  variant="ContactButton">
                Submit
            </Button>
            </Flex>
            
        </Box>
    )
}