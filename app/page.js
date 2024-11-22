'use client'; // Ensures the component runs on the client

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter in Next.js 13+ app directory
import React from 'react';

export default function Home() {
  const router = useRouter();

  function handleRouter() {
    router.push('/product'); 
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js 2024</h1>
      
     
      <Link href="/product">
       Go to Product
      </Link>
      <Link href="/account/membership">
        Go to Account
      </Link>
      
    
      <h1 className="font-bold mt-6 text-lg">
        Other way of accessing pages using useRouter!
      </h1>
      <button
        onClick={handleRouter}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Product
      </button>
    </div>
  );
}
