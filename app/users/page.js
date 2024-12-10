import React from "react";

export default async function UserPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        User Page
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Username:</span> {user.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
