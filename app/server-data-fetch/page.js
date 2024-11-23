import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/users');
    const result = await apiResponse.json();
    return result; // Contains a 'users' array
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  const users = listOfUsers.users;


  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Server-Side Data Fetching</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-5 cursor-pointer">
            <Link href={`/server-data-fetch/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
