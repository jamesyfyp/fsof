"use server";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  AdminAddUserToGroupCommand,
  AdminAddUserToGroupCommandInput
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

export default async function NewUser(prevState: any, formData: FormData) {
  console.log(formData)
  const config = {
    region: "us-east-2",
  };

  const cognitoClient = new CognitoIdentityProviderClient(config);

  const inputUser: AdminCreateUserCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    Username: `${formData.get("email")}`
  };

  const createCommand = new AdminCreateUserCommand(inputUser);
  
  try {    
    let createUserResponse = await cognitoClient.send(createCommand)
  } catch (e) {
    return{message:`${e}`, status:false}
  }

  const inputAddUserToGroup: AdminAddUserToGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    Username: `${formData.get("email")}`,
    GroupName: `${formData.get("group")}`
  };
  
  const addUserToGroupCommand = new AdminAddUserToGroupCommand(inputAddUserToGroup)
  
  try {
    let addToGroupResponse = await cognitoClient.send(addUserToGroupCommand)
  } catch (e) {
    return{message:`${e}`, status:false}
  }
  
  revalidatePath("/dashboard/Admin");
  return{message:"added user", status:true}
}
