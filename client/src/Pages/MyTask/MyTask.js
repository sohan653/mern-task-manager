import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskCount from '../../Components/TaskCount';

const MyTask = () => {
    const [ newTask,setNewTask]=useState([]);
    const [ processingTask,setProcessingTask]=useState([]);
    const [ finishedTask,setFinishedTask]=useState([]);
    const [ cancelledTask,setCancelledTask]=useState([]);

    console.log(newTask)

    useEffect(()=>{
        axios.get('/tasks')
        .then(res=>{
            const tasks=res.data.data;
           setNewTask(tasks.filter(task=> task.status==='new'))
           setProcessingTask(tasks.filter(task=> task.status==='processing'))
           setFinishedTask(tasks.filter(task=> task.status==='finished'))
           setCancelledTask(tasks.filter(task=> task.status==='cancelled')) 
        })
    },[])

    if( newTask.length<=0 && processingTask.length<=0 && finishedTask.length<=0 && cancelledTask.length<=0){
      return <h1 className='text-center text-2xl'> You have not added Task yet</h1>
    }

    return (
        <div className='flex justify-between p-14'>
         
          {
            newTask.length>0 ? <TaskCount taskName='new' length={newTask.length}></TaskCount>:<></>
          }
          {
            processingTask.length>0 ? <TaskCount taskName='processing' length={processingTask.length}></TaskCount>:<></>
          }
          {
            finishedTask.length>0 ? <TaskCount taskName='finished' length={finishedTask.length}></TaskCount>:<></>
          }
          {
            cancelledTask.length>0 ? <TaskCount taskName='cancelled' length={cancelledTask.length}></TaskCount>:<></>
          }
          
          
        </div>
    );
};

export default MyTask;