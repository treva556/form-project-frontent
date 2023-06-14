import React, { useState } from 'react';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      id_number: idNumber,
      phone_number: phoneNumber,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // User created successfully
        // Perform any necessary actions, such as refreshing the user list
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="idNumber">ID Number:</label>
      <input type="text" id="idNumber" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;