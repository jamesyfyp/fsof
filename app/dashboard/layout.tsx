import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import SideNav from "../components/SideNav";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) redirect("/api/auth/signin");

  return (
    <SessionProvider session={session}>
      <main className="mx-auto max-w-5xl text-2xl flex gap-2">
        <SideNav />
        {children}
      </main>
    </SessionProvider>
  );
}
