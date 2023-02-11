import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Create from './../../Components/Create';

const CreateTask = () => {
    const navigate=useNavigate()
    const [taskName,setTaskName]=useState('')
    const [description,setDescription]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const paylaod={
            taskName,
            description
        }
       axios.post('/create-task',paylaod).then((res)=>{
        toast.success('Task created')
        navigate('/new')
       })
       .catch(error => {
        toast.error(error.message)
       })
    }
    return (
        <div>
          <Create setTaskName={setTaskName} setDescription={setDescription} handleSubmit={handleSubmit}></Create>
        </div>
    );
};

export default CreateTask;