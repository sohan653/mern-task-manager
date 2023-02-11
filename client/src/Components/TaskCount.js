import React from 'react';

const TaskCount = ({taskName,length}) => {
    return (
        <div className='w-52 border-4 bg-zinc-100 rounded-lg'>
             <div class="card-body">
          <h2 class=" text-center bold text-slate-900 text-3xl">{taskName} task</h2>
          <p  className='text-center text-2xl'>{length}</p>
         
          
        </div>
        </div>
    );
};

export default TaskCount;