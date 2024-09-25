import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import Dashboard from "@/components/ui/Hero";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
}