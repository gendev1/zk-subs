"use client";

import Main from "components/pages/main";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    alert("This application is only connected to frontend and blockchain, zkp server is not yet connected")
  },[])

  return (
    <div>
      <Main />
    </div>
  );
}
