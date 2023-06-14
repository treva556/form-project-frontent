//import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserTable from './components/table';
import AddUserForm from './components/form';

function App() {
  return (
    <div>
     <UserTable/>
     <AddUserForm/>
    </div>
  );
}

export default App;
