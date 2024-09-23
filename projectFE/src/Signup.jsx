import React, { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './App.css'
const Signup = () => {
    const [username,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log({username,password})
        try {
            const res= await axios.post('http://localhost:5000/api/auth/signup',{username,password});
            if(res){
                alert("Success");
                navigate('/home'); 
            } 
    }catch(err){
        alert(err)
      }
    };

    return (
        <div className='up'>
            <h2 className='h2'>Signup</h2>
            <div className='sl'>
        <form onSubmit={handlesubmit}>
            
            <input className='email' type="email" name="email" placeholder="Email"  value={username} onChange={(a)=> setEmail(a.target.value)} required /> <br /><br />
            <input className='email' type="password" name="password" placeholder="Password"  value={password} onChange={(c)=>setPassword(c.target.value)} required /> <br /><br />
            <button type="submit" className='sign' >Signup</button>
            <div>

            <p className='p'>Already have an account?</p> <Link to='/login'>login</Link>
            </div>

        </form>
        </div>
        </div>
    );
};

export default Signup;
