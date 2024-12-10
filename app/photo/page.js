"use client";
import React, { useEffect, useState } from "react";

export default function Photo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on component mount
  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.slice(0, 9).map((item) => (
          <div key={item.id} className="border p-4 rounded-md shadow-md">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <h3>{item.thumbnailUrl}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
