import React,{useState} from 'react'
import axios from 'axios'
const App = () => {
  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const handlesubmit=async(e)=>{
    e.preventDefault();
    console.log({Name,Email,Password})
    try{
      const res= await axios.post('http://localhost:3000/api/signup',{Name,Email,Password});
      if(res){
        alert("Success");
      }

    }
    catch(err){
      alert(err)
    }
  }
  return (
    <div style={{backgroundColor:'#ccc',width:'13rem',height:'38vh',paddingLeft:'20px',boxShadow:'7px 7px 13px #c0c0c0'}}>
      <div style={{paddingLeft:'50px'}}>
        <h2>Signup</h2>
      </div>
      
      <form onSubmit={handlesubmit}>
        <label><strong>Name:</strong></label><br /> 
        <input type="text" value={Name} onChange={(a)=> setName(a.target.value)} required /> <br /> <br />
        <label><strong>Email:</strong></label><br /> 
        <input type="email" value={Email} onChange={(b)=>setEmail(b.target.value)} required /> <br /> <br />
        <label><strong>Password:</strong></label><br /> 
        <input type="password" value={Password} onChange={(c)=>setPassword(c.target.value)} required /> <br /> <br />
        <div style={{paddingLeft:'50px'}}>
          <button type='submit'>Signup</button>
        </div>
      </form>
    </div>
  )
}

export default App