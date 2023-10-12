"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Key } from "react";

interface NavLink {
  text: string;
  route: string;
}

export default function NavMenu() {
  const session = useSession();
  const menuItems: NavLink[] = [];
  if (!session) return <></>;
  if (session?.data?.user) {
    let role = JSON.parse(String(session.data.user.name));
    if (role[0] === "FSOF") {
      menuItems.push({text:"Admin", route:"/dashboard/Admin"});
      menuItems.push({text:"Invoices", route:"/dashboard/Invoices"});
    } else {
      menuItems.push({text:"Add Invoice", route:"/dashboard/Shop/AddInvoice"});
      menuItems.push({text:"All Invoices", route:"/dashboard/Shop/Invoices"});
    }
  }
  const buttonStyle = "block justify-center text-sm text-center p-2  m-2  border-2 border-r-4 border-b-4 border-white hover:bg-slate-600 hover:underline hover:cursor-pointer hover:text-white rounded"
  return (
    <div className="w-[200px] min-h-[99vh] bg-slate-800 ">
      {menuItems.map((item: NavLink, i: Key) => {
        return (
          <Link
            className={buttonStyle}
            key={i}
            href={item.route}
          >
            {item.text}
          </Link>
        );
      })}
      <div
        onClick={() => {
          signOut();
        }}
        className={buttonStyle}
      >
        Sign Out
      </div>
    </div>
  );
}
