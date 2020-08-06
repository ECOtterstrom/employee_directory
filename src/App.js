import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import API from './utils/API';
import InputField from './components/InputField';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    API.getUsers().then(results => {
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
    })
  }, []);


  //searches for employees based on last name
  const handleChange = (event) => {
    //updates filteredUsers array
    const filter = event.target.value
    
    const result = users.filter(user => user.name.last.includes(filter))
    setFilteredUsers(result)
  }

  // sorts the employees based on last name
  const handleSort = (event) => {
    //updates sortedUsers array
    const result = filteredUsers.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      } else {
        return 1;
      }
    })
    setFilteredUsers(result)
    setIsSorted(true)
  }

  
  return (
    <div>
      <InputField handleChange={handleChange} />
      <Table users={filteredUsers} handleSort={handleSort} />
    </div>
  );
}

export default App;
