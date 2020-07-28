import React, {useEffect, useState} from 'react';
import Table from './components/Table';
import API from './utils/API';

function App() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    API.getUsers().then(results => setUsers(results.data.results))
  }, users)
console.log(users)
  return(
    <Table users = {users} />
  );
}



export default App;

//filteredUsers and sortedUsers belong in here, set state, try to find examples