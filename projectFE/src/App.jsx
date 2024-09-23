import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Signup from './Signup';
import Login from './login';
import Home from './home'
import Change from './change'
import Delete from './delete'
import Profile from './Profile'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/change" element={<Change/>}/>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/logout" element={<Profile/>}/>

      </Routes>
    </Router>
  );
}


export default App;
