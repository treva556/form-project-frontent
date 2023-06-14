import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    //   const response = await fetch('/users/fetch_all_data');
      const response = await fetch('http://127.0.0.1:3000/users/fetch_all_data');

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <br></br>
          <th>ID</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.id_number}</td>
            <td>{user.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;