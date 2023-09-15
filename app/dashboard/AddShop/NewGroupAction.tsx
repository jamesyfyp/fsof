"use server";
import ClientForm from "@/app/components/ClientForm";
import ServerButton from "@/app/components/ServerButton";
import {
  CognitoIdentityProviderClient,
  CreateGroupCommand,
  CreateGroupCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

export default async function NewGroup(formData: FormData) {
  const client = new CognitoIdentityProviderClient({
    region: "us-east-2",
  });
  const inputGroupName: CreateGroupCommandInput = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: String(formData.get("GroupName")),
  };
  const command = new CreateGroupCommand(inputGroupName);
  try {
    const response = await client.send(command);
  } catch (e) {
    console.log(e);
    return { error: "error" };
  }

  revalidatePath("/dashboard/AddShop");
}
