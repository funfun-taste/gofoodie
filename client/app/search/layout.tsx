import {SearchTitle} from "@components/search/SearchTitle";
import React from "react";

export default function SearchLayout({
                                       children,
                                     }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchTitle/>
      {children}
    </>
  )
}
