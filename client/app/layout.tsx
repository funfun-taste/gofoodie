import type { Metadata } from "next";
import "@styles/reset.scss";
import React from "react";
import { Layout } from "@components/Layout";
import AuthProvider from "@providers/AuthProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanstackQueryProviders from "@providers/TanstackQueryProvider";
import AuthContext from "@context/AuthContext";

export const metadata: Metadata = {
  title: "배~고푸디? 배고플땐 고푸디 | go foodie",
  description: "배~고푸디? 배고플땐 고푸디",
  keywords:
    "맛집, 레시피, 동네맛집, 맛, 맛집 리스트, 맛집 정보, 음식, 음식점, 데이트, 푸디, 고푸디, dahoon06, gofoodie, GoFoodie, go-foodie, goFoodie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <AuthContext>
          <TanstackQueryProviders>
            <AuthProvider>
              <Layout>{children}</Layout>
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </TanstackQueryProviders>
        </AuthContext>
      </body>
    </html>
  );
}
