
async function fetchListOfUsers(){
   try {
    const apiResponse = await fetch('https://dummyjson.com/users');
    const result = await apiResponse.json();
    return result;
   } catch (error) {
     throw new Error(error);
   }
}
export default async function ServerSideDataFetching(){
    const listOfUsers = await fetchListOfUsers();
    const users = listOfUsers.users;
  
    return <div>
        <h1>Server side data feching</h1>
        <ul>
            {users.map(user => <li>{user.firstName}</li>)}
        </ul>
        h1
    </div>
}