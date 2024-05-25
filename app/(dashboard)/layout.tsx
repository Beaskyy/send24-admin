"use client";

import { Header } from "@/components/header";
import { useStateContext } from "@/providers/theme-provider";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { token } = useStateContext();
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);
  return (
    <>
    <Header />
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
