import React, { useState } from 'react';
import ReactCodeInput from "react-code-input";
const MatchOTP = () => {
    const [otp,setOtp]=useState('')
    return (
        <div className='w-full mt-11 h-[574px] mb-6  box-border'>

        <div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
            <h1 className='text-3xl p-4 text-center'>match otp</h1>
           <div  className='flex flex-col items-center w-full '>
        
           <ReactCodeInput onChange={(value)=>setOtp(value)}   fields={6}/>
               
           
                 <input  className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="confirm" />
           </div>
          
          
        </div>
        
        
        </div>
    );
};

export default MatchOTP;