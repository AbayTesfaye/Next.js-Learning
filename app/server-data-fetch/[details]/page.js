async function fetchUserDetails(currentId){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentId}`);
        const result = await apiResponse.json();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

export default async function UserDetails({params}){
    const userDetails = await fetchUserDetails(params.details)
    return <div>
        <h1>This is user details</h1>
        <div>
            <p>{userDetails.firstName} {userDetails.lastName}</p>
            <p>{userDetails.age}</p>
            <p>{userDetails.email}</p>
            <p>{userDetails.phone}</p>
            <p>{userDetails.birthDate}</p>
            <p>{userDetails.password}</p>
        </div>
    </div>
}