'use client';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ClientSideDataFetching() {
    // const [loading, setLoading] = useState(true);
    // const [users, setUsers] = useState([]);

    // async function fetchListOfUsers() {
    //     try {
    //         const apiResponse = await fetch('https://dummyjson.com/users');
    //         const result = await apiResponse.json();

    //         if (result.users) {
    //             setUsers(result.users);
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         setUsers([]);
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchListOfUsers();
    // }, []);
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);

    if (error) return <div>Failed to load data.</div>;

    if (isLoading || !data) {
        return <h3 className="font-extrabold">Loading! Please wait!</h3>;
    }

    return (
        <div>
            <h1>Client-side Data Fetching!</h1>
            <ul>
                {data.users && data.users.length > 0 ? (
                    data.users.map((user) => (
                        <li key={user.id} className="mt-5 cursor-pointer">
                            {user.firstName} {user.lastName}
                        </li>
                    ))
                ) : (
                    <p>No users available.</p>
                )}
            </ul>
        </div>
    );
}
