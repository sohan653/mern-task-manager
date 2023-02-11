import moment from 'moment';
import React from 'react';
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteAlert, updateTask } from './SweetAlert';

const TaskCard = ({task,children}) => {
 const date= moment(task?.createdAt).format("MMM Do YY")
  const navigate=useNavigate()
  const handleUpdate=(id,status)=>{
      updateTask(id,status)
      .then(res=>{
        toast.success('update task successfully')
       navigate('/'+res.data.status)
      })
  }
    return (
        <div class="card col-span-1 bg-base-100 shadow-xl border-2 border-y-yellow-400">
        <div class="card-body">
          <h2 class="card-title">{task?.taskName}</h2>
          <p>{task?.description}</p>
          
        </div>
        <div className='flex justify-between items-center p-4'>
            <div className='flex items-center gap-3'>
                <p>{date}</p>
               
                <h1 onClick={()=>handleUpdate(task._id,task.status) } className='cursor-pointer mx-2 p-2'><AiOutlineEdit/></h1>
                <button onClick={()=>deleteAlert(task._id)} className='cursor-pointer mx-2 p-2'><AiFillDelete/></button>
            </div>
            {children}
        </div>
      </div>
    );
};

export default TaskCard;