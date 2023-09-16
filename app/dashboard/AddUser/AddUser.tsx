"use server";
import {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

export default async function AddUser(formData: FormData) {
  const config = {
    region: "us-east-2",
  };

  const cognitoClient = new CognitoIdentityProviderClient(config);

  const inputGroupName = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: String(formData.get("GroupName")),
  };

  const cognitoCommand = new AdminCreateUserCommand(inputGroupName);

  try {
    const response = await cognitoClient.send(cognitoCommand);
  } catch (e) {
    console.log(e);
    return { error: "error" };
  }

  const s3Client = new S3Client(config);
  const input = {
    Bucket: "fsof",
    Key: `${formData.get("GroupName")}/`,
    body: "",
  };
  const s3command = new PutObjectCommand(input);
  const s3response = await s3Client.send(s3command);

  revalidatePath("/dashboard/AddShop");
}
