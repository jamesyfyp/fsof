"use server";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  AdminAddUserToGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

export default async function NewUser(formData: FormData) {
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
    let response = await cognitoClient.send(createCommand)
  } catch (e) {
    
  }
  

  revalidatePath("/dashboard/AddShop");
}
