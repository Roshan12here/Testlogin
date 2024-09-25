"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button className="bg-[#0E793C] text-[#ffffff] hover:text-[#0E793C] hover:bg-[#ffffff] "  onClick={() => signOut()}>Sign out</Button>
  );
}