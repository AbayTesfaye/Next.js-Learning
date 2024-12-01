"use client"; // Ensures the component runs on the client

import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import for useRouter in Next.js 13+ app directory
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js 2024</h1>
    </div>
  );
}
