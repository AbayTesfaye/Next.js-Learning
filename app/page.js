import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js 2024</h1>
      <Link href="/product">
      Go to Product
      </Link>
      <Link href="/account/membership">
       Go to Account
      </Link>
    </div>
  );
}
