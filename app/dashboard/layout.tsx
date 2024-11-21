import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      
      <header>
        <h1>Dashboard header</h1>
      </header>
      <main>
      {children}
      </main> 
      <footer>
        <h1>Dashboard footer</h1>
      </footer>
    </div>
  );
}
