"use client";
import React from "react";
import { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1>Count : {count} Times</h1>
      <div>Boolean Value : {value}</div>
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => {
            setCount(count + 1);
            setValue("Positive");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            setValue("Negative");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
            setValue("null");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
