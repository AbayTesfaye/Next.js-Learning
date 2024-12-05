"use client";
import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}
