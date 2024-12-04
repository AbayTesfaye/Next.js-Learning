"use client"; // Ensures the component runs on the client
import Loading from "./loading";
import Link from "next/link"; // Import for navigation
import React, { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome to Next.js 2024</h1>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
      </div>
    </Suspense>
  );
}
