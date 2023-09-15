"use server";
import {
  CognitoIdentityProviderClient,
  CreateGroupCommandInput,
  DeleteGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

export default async function DeleteGroup(formData: FormData) {
  "use server";
  const client = new CognitoIdentityProviderClient({
    region: "us-east-2",
  });
  const inputGroupName: CreateGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: String(formData.get("GroupName")),
  };
  const command = new DeleteGroupCommand(inputGroupName);
  const response = await client.send(command);
  revalidatePath("/dashboard/AddShop");
}
