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

export default async function NewUser(formData: FormData) {
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
    console.log(createUserResponse)
  } catch (e) {

  }

  const inputAddUserToGroup: AdminAddUserToGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    Username: `${formData.get("email")}`,
    GroupName: `${formData.get("group")}`
  };
  
  const addUserToGroupCommand = new AdminAddUserToGroupCommand(inputAddUserToGroup)
  
  try {
    let addToGroupResponse = await cognitoClient.send(addUserToGroupCommand)
    console.log(addToGroupResponse)
  } catch (e) {
    console.log(e)
  }
  

  revalidatePath("/dashboard/AddShop");
}
