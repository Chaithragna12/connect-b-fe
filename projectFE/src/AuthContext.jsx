import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Change = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const response = await axios.post('http://localhost:5000/api/auth/change', {
        oldPassword,
        newPassword,
      });

      if (response.status === 200) {
        setSuccess('Password changed successfully');
        setError('');
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data.message || 'An error occurred while changing the password.');
      setSuccess('');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className='cp'>
         <h2 className='h'>Change Password</h2>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className='c'>
      <form  onSubmit={handleChangePassword}>
        <label>Oldpassword:</label> <br />
        <input type="password" name="email" placeholder="oldPassword"  value={oldPassword} onChange={(a)=>setOldPassword(a.target.value)} required /> <br /><br />

        <label>New password:</label> <br />
        <input  type="password" name="password" placeholder="newPassword"  value={newPassword} onChange={(c)=>setNewPassword(c.target.value)} required /> <br /><br />
        <button className='b' type="submit" disabled={loading}> {loading ? 'Changing Password...' : 'Change Password'}</button>
        </form>
        </div>
    </div>
  )
}

export default Change