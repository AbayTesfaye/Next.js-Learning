"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot", href: "/forgot" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input
          value={input}
          placeholder="Username"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="border-2 border-gray-300"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
