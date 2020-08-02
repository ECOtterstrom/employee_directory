import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import API from './utils/API';
import InputField from './components/InputField';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then(results => {
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
      //setSortedUsers(results.data.results);
    })
  }, []);
  console.log(users)

  //searches for employees based on last name
  const handleChange = (event) => {
    //updates filteredUsers array
    const filter = event.target.value
    console.log(event.target.value)

    const result = users.filter(user => user.name.last.includes(filter))
    setFilteredUsers(result)
  }

  // sorts the employees based on last name
  // const handleSort = (event) => {
  //   //updates sortedUsers array
  //   const sort = event.target.value
  //   //console.log(event.target.value)

  //   const result = users.sort(user => user.name.last.includes(sort))
  //   setFilteredUsers(result)

  // const result = users.sort(function (a, b) {
  //   if (a.name.last < b.name.last) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // })
  // setUsers([...users])
  // }

  // const actionCase = (event) => {
  //   switch (event) {
  //     case "search":
  //       handleChange()
  //       break
  //     case "sort":
  //       handleSort()
  //       break
  //     default:
  //       console.log('Search or sort by Last Name.')
  //   }
  // }

  return (
    <div>
      <InputField handleChange={handleChange} />
      <Table users={filteredUsers} />
    </div>
  );
}

export default App;
