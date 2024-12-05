function DashboardLayout({ children, users, revenue, notifications, login }) {
  const isLoggedIn = true; // Simulating a logged-out state

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    <div>{login}</div> // Correctly wraps the fallback content in a valid JSX structure
  );
}

export default DashboardLayout;
