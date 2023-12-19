import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserList from './pages/UserList';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/adduser" element={<AdminPage />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/user" element={<UserPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
