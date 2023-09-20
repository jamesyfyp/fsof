import {
  CognitoIdentityProviderClient,
  ListGroupsCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import AddShopForm from "@/app/components/AddShopForm";
import AddUserForm from "@/app/components/AddUserForm";
import ServerButton from "@/app/components/ServerButton";
import NewGroup from "./NewGroupAction";
import DeleteGroup from "./DeleteGroupAction";

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
      <div className="p-4 border-2 border-white rounded-lg">
        <h1 className="text-center w-full p-4 pt-0">Add Shop</h1>
        <AddShopForm serverAction={NewGroup} shops={shops} />
        <div>
          {shops.length > 2 && <h2 className="m-2 pt-4">All Shops</h2>}
          <div className="flex p-2 pt-4 justify-between">
            {shops.map((shop, i) => {
              return <ServerButton shop={shop} action={DeleteGroup} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="p-4 border-2 mt-4 border-white rounded-lg">
        <h1 className="text-center w-full pb-4">Add User</h1>
        <AddUserForm shops={shops} serverAction={NewGroup} />
      </div>
    </div>
  );
}
