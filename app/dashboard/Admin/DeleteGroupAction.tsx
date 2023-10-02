"use server";
import {
  CognitoIdentityProviderClient,
  CreateGroupCommandInput,
  DeleteGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

export default async function DeleteGroup(formData: FormData) {
  "use server";
  const config = {
    region: "us-east-2",
  };
  const cognitoClient = new CognitoIdentityProviderClient(config);
  const inputGroupName: CreateGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: String(formData.get("GroupName")),
  };

  const cognitoCommand = new DeleteGroupCommand(inputGroupName);

  try {
  const cognitoResponse = await cognitoClient.send(cognitoCommand);
  } catch (e) {

  }
  

  const s3Client = new S3Client(config);
  const input = {
    Bucket: "fsof",
    Key: `${formData.get("GroupName")}/`,
    body: "",
  };
  const s3command = new DeleteObjectCommand(input);
  

  try {
  const s3response = await s3Client.send(s3command);

  } catch (e) {

  }

  revalidatePath("/dashboard/AddShop");
}
