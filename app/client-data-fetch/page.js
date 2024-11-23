'use client';

import { useState, useEffect } from 'react';

export default function ClientSideDataFetching() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if (result.users) {
                setUsers(result.users);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []); // Empty dependency array ensures it runs once on mount

    if (loading) {
        return <h3 className="font-extrabold">Loading! Please wait!</h3>;
    }

    return (
        <div>
            <h1>Client-side Data Fetching!</h1>
            <ul>
                {users.length > 0 ? (
                    users.map((user) => (
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
