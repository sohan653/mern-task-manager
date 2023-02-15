import React, { useEffect, useState } from 'react';

const CreateOtp = () => {
    const [email,setEmail]=useState('');
    useEffect(()=>{
        
    },[])
    return (
        <div className='w-full mt-11 h-[574px] mb-6  box-border'>

        <div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
            <h1 className='text-3xl p-4 text-center'> Email Adress</h1>
           <div  className='flex flex-col items-center w-full '>
        
               <input onChange={(e)=>setEmail(e.target.value)} autocomplete="off" className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Using Email' type="email" required name="" id="" />
               
           
           <input  className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="next" />
           </div>
          
           
         
          
        </div>
        
        
        </div>
    );
};

export default CreateOtp;