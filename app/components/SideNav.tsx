"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavMenu() {
  const session = useSession();
  const menuItems = [];
  if (!session) return <></>;
  if (session?.data?.user) {
    let role = JSON.parse(String(session.data.user.name));
    if (role[0] === "FSOF") {
      menuItems.push("Admin");
      menuItems.push("Invoices");
    } else {
      menuItems.push("New Invoice");
      menuItems.push("All Invoice");
    }
  }
  const buttonStyle = "block justify-center text-sm text-center p-2  m-2  border-2 border-r-4 border-b-4 border-white hover:bg-slate-600 hover:underline hover:cursor-pointer hover:text-white rounded"
  return (
    <div className="w-[200px] min-h-[99vh] bg-slate-800 ">
      {menuItems.map((item, i) => {
        return (
          <Link
            className={buttonStyle}
            key={i}
            href={`/dashboard/${item.replaceAll(" ", "")}`}
          >
            {item}
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
