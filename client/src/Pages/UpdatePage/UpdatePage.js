import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdatePage = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')
    const [user,setUser]=useState({})

    useEffect(()=>{
        myProfile()
    },[])

    const myProfile=async()=>{
        try {
            const {data}=await axios.get('/my-profile');
            setUser(data)
        } catch (error) {
            
        }
    }

    const updateUser=async(e)=>{
        e.preventDefault()
        try {
            const payload={
                name:name || user.name,
                email:email || user.email,
                mobileNumber:number || user.mobileNumber
            }
            const {data}=await axios.post('/update-profile',payload);
            if(data){
                setUser(data);
                toast.success('Profile updated successfully')
            }
        } catch (error) {
            
        }
    }


    const changePassword=(e)=>{
        e.preventDefault();
        if(password ===cpassword){
            const newPassword={
                newPassword:password,
                confirmNewPassword:cpassword
            }
            console.log(password)
            axios.post('/change-password',newPassword).then(res=>{
                toast.success('Password changed successfully');
                setCpassword('')
                setPassword('')
            })
        }
    }
    return (
        <div className='w-full flex justify-between'>

<div className='w-96 rounded-md h-[554px] flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>Update Profile</h1>
   
   <form  className='flex flex-col items-center w-full '>
  
   <input onChange={e=>setEmail(e.target.value)} defaultValue={user.email}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email'  type="email" name="" id="email" />
   <input onChange={e=>setName(e.target.value)} defaultValue={user.name} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Name' type="text" name="" id="name" />
   <input onChange={e=>setNumber(e.target.value)} defaultValue={user.mobileNumber} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Mobile Number'  type="text" name="" id="mobile Number" />
   
   <input onClick={updateUser}  className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-blue-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="submit" />
   </form>
  
  
</div>

{/* 2 */}

<div className='w-96 rounded-md h-[554px] flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>Change Password</h1>
   
   <form  className='flex flex-col items-center w-full '>
  
   <input onChange={e=>setPassword(e.target.value)} defaultValue={password   } className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Password' required type="password" name="" id="password" />
   <input onChange={e=>setCpassword(e.target.value)} defaultValue={cpassword} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Confirm Password' required type="password" name="" id="confirmPAssword" />
   <input onClick={changePassword}  className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-blue-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="submit" />
   </form>
  
  
</div>

</div>
    );
};

export default UpdatePage;