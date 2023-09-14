import {
  CognitoIdentityProviderClient,
  ListGroupsCommand,
  CreateGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { revalidatePath } from "next/cache";

async function newGroup(formData: FormData) {
  "use server";
  const client = new CognitoIdentityProviderClient({
    region: "us-east-2",
  });
  const inputGroupName = {
    UserPoolId: "us-east-2_M8qI1fKwv",
    GroupName: formData.get("GroupName"),
  };
  const command = new CreateGroupCommand(inputGroupName);
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
  const shops = response.Groups;
  shops?.forEach((shop, i) => {
    if (shop.GroupName == "FSOF" || shop.GroupName == "admin") {
      shops.splice(i, 1);
    }
  });

  return (
    <div className="w-full min-h-[100vh] p-4">
      <h1 className="text-center w-full">Add Shop</h1>
      <div>
        <h2>All Shops</h2>
        <div className="flex justify-between">
          {shops.map((shop, i) => {
            return (
              <div className="text-sm p-2 m-2 border-2 rounded-md" key={i}>
                {shop.GroupName}
              </div>
            );
          })}
          <form action={newGroup}>
            <input
              className="text-black"
              id="GroupName"
              name="GroupName"
            ></input>
            <button className="" type="submit">
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
