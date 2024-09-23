import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/logout', {
        username,
        password,
      });
      if (response.status === 200) {
        // Clear any local state or tokens if necessary
        alert('Logout')
        navigate('/login'); // Redirect to login or homepage
      }
    } catch (err) {
      setError(err.response?.data.message || 'An error occurred during logout.');
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor="">Email:</label><br />
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setEmail(e.target.value)}
        required
      /> <br /><br />
      <label htmlFor="">Password:</label> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
