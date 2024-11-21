import React from 'react';

export default function Page({ params }) {
  const { id } = params; // Extract `id` from `params`

  return (
    <h1>User's Profile: {id}</h1>
  );
}
