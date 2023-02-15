import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[number,setNumber]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('');
    


    const handleSubmit = async (e)=>{
        e.preventDefault();
       try {
        if(password!==confirmPassword){
            toast.error('password and confirm password not match');
        }
        else{
            const payload={
                name:name,
                email:email,
                mobileNumber:number,
                password:password
            };
            const {data}=await axios.post('/register',payload)
            console.log(data)
           if(data?.data){

            const payload={
                name:data?.data?.name,
                token:data?.token
            }
            
            localStorage.setItem("user",JSON.stringify(payload))
            toast.success('success')
           }else{
            toast.error(data.error)
           }
           
           
        }
       } catch (error) {
        
       }
    
    }
    return (
<div className='w-full'>

<div className='w-96 rounded-md h-[554px] flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>Please Sign Up</h1>
   
   <form  className='flex flex-col items-center w-full '>
  
   <input onChange={e=>setEmail(e.target.value)}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email' required type="email" name="" id="email" />
   <input onChange={e=>setName(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Name' required type="text" name="" id="name" />
   <input onChange={e=>setNumber(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Mobile Number' required type="text" name="" id="mobile Number" />
   <input onChange={e=>setPassword(e.target.value)}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Password' required type="password" name="" id="password" />
   <input onChange={e=>setConfirmPassword(e.target.value)}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Confirm Password' required type="password" name="" id="confirmPAssword" />
   <input onClick={handleSubmit} className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-blue-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="submit" />
   </form>
   <p className='text-center py-2'>Already signUp please  <Link to='/' className='text-blue-600' >Login</Link></p>
   <div className='flex justify-center items-center'>
       <div className='w-28 border-2 border-b-slate-700'></div>
       <p className='p-2'>or</p>
       <div className='w-28 border-2 border-b-slate-700'></div>
   </div>
</div>

</div>
    );
};

export default SignUp;