import React, { useState } from 'react';

const MakePassword = () => {
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('')
    return (
        <div>
          <div className='w-96 rounded-md h-[554px] flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>make-password</h1>
   
   <form  className='flex flex-col items-center w-full '>
  
   <input onChange={e=>setPassword(e.target.value)}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Password' required type="password" name="" id="password" />
   <input onChange={e=>setConfirmPassword(e.target.value)}  className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Confirm Password' required type="password" name="" id="confirmPAssword" />
   <input   className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-blue-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="submit" />
   </form>
  
  
</div>
        </div>
    );
};

export default MakePassword;