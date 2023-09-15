"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavMenu() {
  const session = useSession();
  const menuItems = [];
  if (!session) return <></>;
  if (session?.data?.user) {
    let type = JSON.parse(String(session.data.user.name));
    if (type[0] == "FSOF") {
      menuItems.push("Add Shop");
      menuItems.push("Add User");
      menuItems.push("Invoices");
    } else {
      menuItems.push("New Invoice");
      menuItems.push("All Invoice");
    }
  }
  return (
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
      <button
        onClick={() => {
          signOut();
        }}
        className="block justify-center text-center w-4/5 pt-[.75px] m-auto my-6 h-10 border-2 border-white hover:bg-black hover:text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
