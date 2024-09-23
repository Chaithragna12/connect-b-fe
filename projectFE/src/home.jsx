import React from 'react'
import {  Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
        <h1>Welcome to this home page</h1>
        <Link to='/change'>
            <button>Change Password</button>
        </Link> <br /><br />
        <Link to='/delete'>
            <button>Delete account</button>
        </Link> <br /><br />
        <Link to='/logout'>
        <button>Logout</button>
        </Link>
    </div>
  )
}

export default home