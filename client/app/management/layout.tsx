import "@styles/reset.scss";
import React from "react";
import { ManagementTitle } from "@components/management/ManagementTitle";
import { Footer } from "@components/footer/Footer";

export default function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ManagementTitle />
      {children}
      <Footer />
    </div>
  );
}
