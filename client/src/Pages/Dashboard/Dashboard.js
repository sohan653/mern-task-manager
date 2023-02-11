import React from 'react';
import { BiTask } from "react-icons/bi";
import { Outlet } from 'react-router-dom';
import CustomLink from './../../Components/CustomLink';

const Dashboard = () => {
    const data=JSON.parse(localStorage.getItem('user'))
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>

            <div class="bg-slate-100 overflow-y-scroll w-auto h-auto antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div class="flex flex-col relative w-screen">
        <div id="menu" class="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
           <div id="logo" class="my-4 px-6">
            <h1 class="text-lg md:text-2xl font-bold text-white">Dash<span class="text-blue-500">Board</span>.</h1>
            
           </div>
           <div id="profile" class="px-6 py-10">
            <p class="text-blue-500 text-3xl bold uppercase text-center">{data?.name}</p>
            
           </div>
           <div id="nav" class="w-full px-6">
            <CustomLink to='/' class="w-full px-2 mb-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 text-white">My Task</span>
                </div>
            </CustomLink>

            <CustomLink to='/create' class="w-full mb-2 px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 text-white">Create Task</span>
                </div>
            </CustomLink>

            <CustomLink to='/new' class="w-full px-2 mb-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 text-white">New Task</span>
                </div>
            </CustomLink>

            <CustomLink to='/processing' class="w-full px-2 mb-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 ">Processing Task</span>
                </div>
            </CustomLink>

            <CustomLink to='/finished' class="w-full px-2 mb-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3   transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 ">Finished Task</span>
                </div>
            </CustomLink>

            <CustomLink to='/cancelled' class="w-full px-2 mb-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 text-au  transition ease-linear duration-150">
                <div>
                <BiTask/>
                      
                </div>
                <div class="flex flex-col">
                    <span class="text-lg font-bold leading-5 ">Cancelled Task</span>
                </div>
            </CustomLink>
           
            
           </div>
        </div>
        
      
    </div>
</div>
            </div>
            <div className='col-span-3 bg-slate-600'>
                  <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;