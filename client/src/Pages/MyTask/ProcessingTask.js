import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TaskCard from '../../Components/TaskCard';

const ProcessingTask = () => {
    const [task,setTask]=useState([]);
    useEffect(()=>{
        axios.get('/search/processing')
        .then(res=>{
            setTask(res.data.data)
        })
    },[])
    return (
        <div className='grid grid-cols-3 p-10 gap-3'>
           {
            task.map(t=>
                <TaskCard task={t}>
                    <button className='btn btn-secondary'>Processing</button>
                </TaskCard>
            )
           }
           {
           task.length<=0 && <h1 className='bold text-3xl text-center text-pink-400'>there is no task</h1>
          }
        </div>
    );
};

export default ProcessingTask;