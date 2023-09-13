import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  const menuItems = [];
  if (session.user) {
    let type = JSON.parse(session.user.name);
    if (type[0] == "FSOF") {
      menuItems.push("Add Shop");
      menuItems.push("Add User");
      menuItems.push("Invoices");
    } else {
      menuItems.push("New Invoice");
      menuItems.push("All Invoice");
    }
  }

  // create server action that will go into a component that will allow for us to add a cognito group

  return (
    <div className="w-full min-h-[99vh] flex border-2 border-white rounded">
      <div className="w-[200px] min-h-[99vh] bg-slate-400 ">
        {menuItems.map((item, i) => {
          return (
            <Link
              className="block justify-center text-center w-4/5 pt-[.75px] m-auto my-6 h-10 border-2 border-white hover:bg-black hover:text-white rounded"
              key={i}
              href={`/dashboard/${item.replaceAll(" ", "")}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="w-full min-h-[100vh] p-4">
        <h1 className="text-center w-full">add shop</h1>
      </div>
    </div>
  );
}
