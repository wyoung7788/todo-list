import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./reactqueryprovider";
import Provider from "./components/provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do List",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log('session')
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
          </Provider>
      </body>
    </html>
  );
}
