import React from 'react';
import './Login.css'; // Importing Login-specific CSS
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const CheckLogin=()=>{
    const user=document.getElementById('Name').value;
    const pass=document.getElementById('pass').value;

    if(user&&pass.length>5)
      {
          
          axios.get("http://localhost:3000/User")
          .then((res)=>
              {
                     const data=res.data;
                     console.log(data);
                     if(data.find(obj => obj.email === user))
                     {
                        let index=data.findIndex(obj => obj.email === user);
                        
                        if(data[index].password === pass)
                        {
                          window.location.href='/Home';
                        }
                        else{
                          alert("Invalid password");
                        }
                     }
                     else
                     {
                      alert("User not found");
                      
                     }
                  
              })
              .catch((error)=>
              {
                  console.log(error);
              })
          
      }
  }
  return (
    <div className="Body">
    <div className="Contain">
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username" id="Name" className='Name' required /><br />
        <input type="password"  placeholder="Password" id="pass" className="Name" required /><br />
        <input type="checkbox" className="Check" />
        <label id="me">Remember me</label>
        <a href="/forgot-password">Forget password?</a><br/>
        <button type="submit" className="Submit" onClick={CheckLogin} required >Login</button><br />
        <label className="Account">Don't have an account? <Link to="/Signup">Sign up</Link></label>
      </form>
    </div>
    </div>
  );
}
export default Login;

