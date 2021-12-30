import { Box, Label, Button, Flex, Input, Text, Heading } from "theme-ui"
import { useForm} from "react-hook-form"


export interface Tires {
    fl: number,
    fr: number,
    rl: number,
    rr: number,
    rl2: number,
    rr2: number,
    brand: string,
    size: string,
    partNumber: string
}


export  const Tires = ({setData, display}: any) =>{
    const  {
        register,
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm<Tires>( );

    const onSubmit = (data: Tires) =>{
        setData(data)
    }

    if (display === true ) return (
        <Box id="tireDataInputs" p={[1,2,3]} bg='secondary' as="form" marginTop="0" marginBottom="200px" onSubmit={handleSubmit(onSubmit)} sx={{
            width: ['80%', '75%', '65%','50%'],
            margin: 'auto',
            borderRadius: '10px',
            justifyContent: "center",
            boxShadow: "10px 10px",
            boxShadodColor: "lightgrey"
        }}>
            <Heading marginY={[1,2,3]}>Tread Depths</Heading>
            <Flex  >
                <Label htmlFor="fl" paddingRight="5%" sx={{ width: "10%"}}>
                    FL
                </Label>
                <Input variant="flexCenterTire" marginRight="20%" id="fl"{...register("fl", {
                    required: true,
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
                <Label htmlFor="fr" paddingRight="5%" sx={{ width: "10%"}} >
                    FR
                </Label>
                <Input  variant="flexCenterTire" marginRight="20%" id="fr"{...register("fr", {
                    required: true,
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
            </Flex>
            <Flex marginY={[1,2,3,4]} >
                <Label htmlFor="rl" paddingRight="5%" sx={{ width: "10%"}}>
                    RL
                </Label>
                <Input  variant="flexCenterTire" marginRight="20%" id="rl"{...register("rl", {
                    required: true,
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
                <Label htmlFor="rr" paddingRight="5%" sx={{ width: "10%"}}>
                    RR
                </Label>
                <Input  variant="flexCenterTire" marginRight="20%" id="rr"{...register("rr", {
                    required: true,
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
            </Flex>
            <Flex marginY={[1,2,3,4]}  >
                <Label htmlFor="rl2" paddingRight="5%" sx={{ width: "10%"}}>
                    2ND RL
                </Label>
                <Input  variant="flexCenterTire" marginRight="20%" id=""{...register("rl2", {
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
                <Label htmlFor="rr2" paddingRight="5%" sx={{ width: "10%"}}>
                    2ND RR
                </Label>
                <Input  variant="flexCenterTire" marginRight="20%" id=""{...register("rr2", {
                    maxLength: {
                        value: 2,
                        message: "This input exceed maxLength."
                      }
                })}/>
            </Flex >
                {errors?.fr?.type === "required" && <Text variant="formErrorTire">! the front right tread depth is required</Text>}
                {errors?.fl?.type === "required" && <Text variant="formErrorTire">! the front left tread depth is required</Text>}
                {errors?.rr?.type === "required" && <Text variant="formErrorTire">! the rear left tread depth is required</Text>}
                {errors?.rl?.type === "required" && <Text variant="formErrorTire">! this rear right required</Text>}
                {errors?.fr?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
                {errors?.fl?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
                {errors?.rr?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
                {errors?.rl?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
                {errors?.rr2?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
                {errors?.rl2?.type === "maxLength" && (
                    <Text variant="formErrorTire">! two digits max in 32nds of an inch</Text>
                )}
            <Label htmlFor="brand" paddingRight="5%" sx={{ width: "10%"}}>
                Brand
            </Label>
            <Input id="brand"{...register("brand", {
                required: true
            })}/>
            {errors?.brand?.type === "required" && <Text variant="formErrorTire">! field is required</Text>}
            <Label htmlFor="size" paddingRight="5%" sx={{ width: "10%"}}>
                size
            </Label>
                <Input defaultValue="ex: 235/65/16c" id="size"{...register("size", {
                    required: true,
                })}/>
                {errors?.size?.type === "required" && <Text variant="formErrorTire">! field is required</Text>}
            <Label htmlFor="part number">
                part number
            </Label>
            <Input  id="partNumber"{...register("partNumber", {
                required: true,
            })}/>
            {errors?.partNumber?.type === "required" && <Text variant="formErrorTire">! field is required</Text>}
            <Flex paddingTop={[1,2,3]} sx={{
                justifyContent: 'center',
            }}>
            <Button paddingTop={[1,2,3]} type="submit" variant="ContactButton">
                Submit
            </Button>
            </Flex>
        </Box>
    )
    return(<></>)
}
