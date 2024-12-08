"use client";
import React from "react";
import Link from "../node_modules/next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js 2024</h1>
      <Link href="/dashboard">About</Link>
    </div>
  );
}
