import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const CheckRegister=()=>
  {
    const user=document.getElementById("user").value;
    const pass=document.getElementById("pass").value;
    const con=document.getElementById("con").value;
    axios.get('http://localhost:3000/User')
       .then((res)=>
        {
            const data=res.data;
            const userData=data.find(obj => obj.email === user)
            if(!userData&&pass.length>5)
            {
                
                if(pass===con)
                {
                    axios.post('http://localhost:3000/User',{
                        email:user,
                        password:pass
                    })
                    .then(()=>{
                      window.location.href='/';
                    })
                    .catch(err=> console.log(err))
               }
               else{
                alert("Password Mismatch");
               }
            }
            else
            {
              if(pass.length<6)
              {
                alert("Password must be at least 6");
              }
              else{
                alert("User already exists");
              }
            }
        })
       .catch((err)=>console.log(err))
  }
  return (
    <div className="body">
    <div className="contain">
      <form className="signup">
        <h1>SignUp</h1>
        <input type="text" placeholder="Username" className="name" id="user" required /><br />
        <input type="password" className="name" placeholder="Password" id="pass"required /><br />
        <input type="password" className="name" placeholder="Confirm Password" id="con" required /><br />
        <button type="submit" className="submit" onClick={CheckRegister}>SignUp</button><br />
        <label className="account">
          Already have an account? <Link to="/Login">Sign in</Link>
        </label>
      </form>
    </div>
    </div>
     
  );
}
export default Signup;
