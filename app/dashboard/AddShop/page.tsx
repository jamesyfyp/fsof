import ClientForm from "@/app/components/ClientForm";
import ServerButton from "@/app/components/ServerButton";
import {
  CognitoIdentityProviderClient,
  ListGroupsCommand,
  CreateGroupCommand,
  CreateGroupCommandInput,
  DeleteGroupCommand,
  GroupType,
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

async function newGroup(formData: FormData) {
  "use server";
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

async function DeleteGroup(formData: FormData) {
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

export default async function AddShop() {
  const client = new CognitoIdentityProviderClient({
    region: "us-east-2",
  });
  const input = {
    UserPoolId: "us-east-2_M8qI1fKwv",
  };
  const command = new ListGroupsCommand(input);
  const response = await client.send(command);
  const groups = response.Groups;
  const shops: string[] = [];
  groups?.map((shop, i) => {
    if (shop.GroupName != "FSOF" && shop.GroupName != "admin") {
      shops.push(String(shop.GroupName));
    }
  });
  if (!shops) return <></>;
  return (
    <div className="w-full min-h-[100vh] p-4">
      <h1 className="text-center w-full p-4">Add Shop</h1>
      <ClientForm serverAction={newGroup} shops={shops} />
      <div>
        {shops.length > 2 && <h2 className="m-2 pt-4">All Shops</h2>}
        <div className="flex justify-between">
          {shops.map((shop, i) => {
            return <ServerButton shop={shop} action={DeleteGroup} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
2;
