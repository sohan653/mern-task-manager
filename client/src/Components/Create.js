import React from 'react';

const Create = ({setTaskName,setDescription,handleSubmit}) => {
    return (
        <div>
              <div className='w-full h-[574px] mb-6  box-border'>

<div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'> Task</h1>
   <form  className='flex flex-col items-center w-full '>

       <input onChange={e => setTaskName(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-full max-w-xs outline-none focus:border-green-700' placeholder='Task Name' type="email" required name="" id="" />
       
       <textarea  onChange={e => setDescription(e.target.value)}  placeholder="Description" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
   <input onClick={handleSubmit} className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="Create Task" />
   </form>
   
        </div>
        </div>

        </div>
       
    );
};

export default Create;