"use server";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import {
  CognitoIdentityProviderClient,
  CreateGroupCommand,
  CreateGroupCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

export default async function NewGroup(prevState: any, formData: FormData) {
  const config = {
    region: "us-east-2",
  };

  const cognitoClient = new CognitoIdentityProviderClient(config);

  const inputGroupName: CreateGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: String(formData.get("GroupName")),
  };

  const cognitoCommand = new CreateGroupCommand(inputGroupName);

  try {
    const response = await cognitoClient.send(cognitoCommand);
  } catch (e) {
    return{message:`${e}`, status:false}
  }

  const s3Client = new S3Client(config);
  const input = {
    Bucket: "fsof",
    Key: `${formData.get("GroupName")}/`,
    body: "",
  };
  const s3command = new PutObjectCommand(input);
  try{

  } catch (e) {
    return{message:`${e}`, status:false}
  }
  const s3response = await s3Client.send(s3command);

  revalidatePath("/dashboard/Admin");
  
  return{message:"added shop", status:true}
}
