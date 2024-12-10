"use client";
import React from "react";

export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-600 text-lg">
          Oops! Something went wrong. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
