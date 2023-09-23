"use client";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Icons } from "components/icons";
import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import React from "react";

const contractAddress = "0x37176E5Ec16e5a40cF0DbeDaADfd6C792AcB2BE1";

const Page = () => {
  const { contract } = useContract(contractAddress);

  // Read contract with arguments
  const { data, isLoading, error } = useContractRead(contract, "providerCount");

  console.log(data);

  if (error) {
    console.error("failed to read contract", error);
  }

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="max-w-xl">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Provider Registration</CardTitle>
            <CardDescription>
              Connect your wallet and enter name to register{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Netflix" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url">Provider URL</Label>
              <Input id="url" type="url" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url">Fee or fee/month</Label>
              <Input id="url" value={"8.99"} type="url" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register Provider</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
