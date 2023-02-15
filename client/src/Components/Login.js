import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const [password,setPassword] =useState('');
    const [email,setEmail] =useState('');


    const handleSubmit = async (e)=>{
        e.preventDefault();
       try {
       
            const payload={ 
                email:email,
                password:password
            };
            const {data}=await axios.post('/login',payload)
            console.log(data)
           if(data?.data){

            const payload={
                name:data?.data?.name,
                token:data?.token
            }
            
            localStorage.setItem("user",JSON.stringify(payload))
            toast.success('success');
            window.location.href="/"
           }else{
            toast.error(data.error)
           }
           
           
        
       } catch (error) {
        
       }
    
    }
    return (
        <div>
          
             <div className='w-full h-[574px] mb-6  box-border'>

<div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'> Login</h1>
   <div  className='flex flex-col items-center w-full '>

       <input onChange={(e)=>setEmail(e.target.value)} autocomplete="off" className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email' type="email" required name="" id="" />
       
   <input onChange={(e)=>setPassword(e.target.value)} autocomplete="off"  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Password' type="password" required name="" id="" />
   <input onClick={handleSubmit} className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="Log in" />
   </div>
   <Link to='/create-otp'  className='text-blue-600 text-center'>forgot password</Link>
   <p className='text-center py-2'>Not Sign Up please <Link to='/signup' className='text-blue-600' to='/signup'>sign up</Link></p>
   <div className='flex justify-center items-center'>
       <div className='w-28 border-2 border-b-slate-700'></div>
       <p className='p-2'>*</p>
       <div className='w-28 border-2 border-b-slate-700'></div>
   </div>
   
 
  
</div>


</div>

        </div>
    );
};

export default Login;