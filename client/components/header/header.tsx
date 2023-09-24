import ThemeToggle from "components/theme-toggle";
import Image from "next/image";
import React from "react";
import { useConnect, metamaskWallet, useAddress } from "@thirdweb-dev/react";
import { Button } from "components/ui/button";
import Link from "next/link";

const metamask = metamaskWallet();

const Header = () => {
  const connect = useConnect();

  const address = useAddress();

  return (
    <div className="fixed z-50 top-0 left-0 right-0 mx-auto max-w-6xl flex justify-between border-inherit rounded-lg px-4 py-2 items-center my-5 backdrop-blur-md bg-inherit bg-opacity-50 border border-zinc-200 shadow-sm dark:border-zinc-800">
      <div className="flex items-center justify-center">
        {/* <Image src='/logo.png' width={30} height={30} alt='zk-subs'/> */}
        <Link href={"/"}>
          <h2 className="ml-2 text-lg font-black">MaskD</h2>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        {address ? (
          <p>{address}</p>
        ) : (
          <Button
            onClick={async () => {
              const wallet = await connect(metamask);
              console.log("connected to ", wallet);
            }}
          >
            Connect Wallet
          </Button>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
