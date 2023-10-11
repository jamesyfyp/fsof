
import {
  CognitoIdentityProviderClient,
  ListGroupsCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import AddShopForm from "@/app/components/AddShopForm";
import AddUserForm from "@/app/components/AddUserForm";
import ServerButton from "@/app/components/ServerButton";
import NewGroup from "./NewGroupAction";
import DeleteGroup from "./DeleteGroupAction";
import NewUser from "./NewUserAction";

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
        <div className="lg:flex lg: gap-4 ">
          <AddShopForm serverAction={NewGroup} shops={shops} />
          <AddUserForm shops={shops} serverAction={NewUser} />
        </div>
        <div>
          <h1 className="mt-5">Remove Shop</h1>
          <div className="flex pt-2 gap-2">
            {shops.map((shop, i) => {
              return <ServerButton shop={shop} action={DeleteGroup} key={i} />;
            })}
          </div>
        </div>
      
        
    </div>
  );
}
