"use client";
import React from "react";
import { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1>Count : {count} Times</h1>
      <div className="flex justify-center items-center gap-6">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
