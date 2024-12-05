"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("The order has been successfully completed!");
    router.push("/");
  };
  return (
    <div>
      <h1>Order page!</h1>
      <button onClick={handleOrder}>Make order</button>
    </div>
  );
}
