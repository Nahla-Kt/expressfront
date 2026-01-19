import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
   const [formdata,setformdata]=useState({
           email:'',
           pass:''
       })

       const handlechange=(e)=>{
    setformdata({
        ...formdata,[e.target.name]:e.target.value
    })
}
    const handleLogin =async (e) => {
        e.preventDefault()


          try{
                const res=await axios.post(`${import.meta.env.VITE_API_URL}login`,formdata)
                console.log(res);
        
                if(res.status == 200){
                    alert("Login successfull")
                    localStorage.setItem("token",res.data.token)

                    navigate("/Addproduct")
                }
                else{
                    alert("Data added failed")
                }
        
                
            }catch(error){
               alert("invalid email or password")
        
        
                
            }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="email" name='email' value={formdata.email} placeholder='enter your email' onChange={handlechange} />
                <input type="password" name='pass' value={formdata.pass} placeholder='enter your password' onChange={handlechange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login