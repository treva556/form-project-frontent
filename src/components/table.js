import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/users/1/fetch_data'); // Replace 1 with the appropriate user ID
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userData.name}</td>
          <td>{userData.id_number}</td>
          <td>{userData.phone_number}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;