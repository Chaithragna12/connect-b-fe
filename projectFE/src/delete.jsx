import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import axios from 'axios';
const deleteaccount = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleDelete = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.delete('http://localhost:5000/api/auth/delete', {
          data: { username, password },
          headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.status === 200) {
          alert('Account deleted successfully');
          navigate('/');
        } else {
          setError(response.data.message || 'Failed to delete account');
        }
      } catch (err) {
        console.error('Error:', err.response || err);  // Log the full error
        setError(err.response?.data?.message || 'An error occurred while deleting the account.');
      }
    }      
  
  return (

    <div>
          <div className='up'>
            <h2 className='h2'>Delete</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='sl'>
        <form onSubmit={handleDelete}>
            
            <input className='email' type="email" name="email" placeholder="Email"  value={username} onChange={(a)=> setEmail(a.target.value)} required /> <br /><br />
            <input className='email' type="password" name="password" placeholder="Password"  value={password} onChange={(c)=>setPassword(c.target.value)} required /> <br /><br />
            <button type="submit" className='sign' >Delete</button>
            <div>   
            </div>

        </form>
        </div>
        </div>
    </div>
  )
}

export default deleteaccount