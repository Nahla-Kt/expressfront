import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Adduser() {
const navigate=useNavigate()
    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        pass:'',
        cpass:''
    })

const handlechange=(e)=>{
    setformdata({
        ...formdata,[e.target.name]:e.target.value
    })
}

const handlesubmit=async(e)=>{
    e.preventDefault()
    try{
        const res=await axios.post(`${import.meta.env.VITE_API_URL}adduser`,formdata)
        console.log(res);

        if(res.status==201){
            alert("Data added successfull")
            navigate("./Login")
        }
        else{
            alert("Data added failed")
        }

        
    }catch(error){
        console.log(error);


        
    }
}
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h2>User registration</h2>
            <input type="text" name='name' value={formdata.name} placeholder='enter your name' onChange={handlechange}/>
            <input type="email" name='email' value={formdata.email} placeholder='enter your email' onChange={handlechange}/>
            <input type="password" name='pass' value={formdata.pass} placeholder='enter your password' onChange={handlechange}/>
            <input type="password" name='cpass' value={formdata.cpass} placeholder='confirm password' onChange={handlechange}/>
         <button type='submit'>submit</button>
       
       
        </form>
    </div>
  )
}

export default Adduser