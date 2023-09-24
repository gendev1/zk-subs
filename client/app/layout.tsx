"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "components/header";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZK-Subs",
  description: "Anon Private Subscriptions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThirdwebProvider
            activeChain="mumbai"
            supportedWallets={[metamaskWallet()]}
            clientId="d89a6ea70f6c19dd4eec32d3b4de3f35"
          >
            <div className="bg-dotted-spacing-4 bg-dotted-[#242424]">
              <Header />
              <div>{children}</div>
            </div>
          </ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
