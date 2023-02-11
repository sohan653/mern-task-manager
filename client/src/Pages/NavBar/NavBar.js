import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NavBar = ({children}) => {
  const navigate=useNavigate();
   const [user,setuser]=useState({});
   useEffect(()=>{
    axios.get('/my-profile').then(res=>{
      setuser(res.data)
      
    })
  
   },[]);

const logout =()=>{
  localStorage.removeItem('user');
  toast('Logged out')
  window.location.href="/"
}

    return (
        <div>
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        {/* drawer */}
        task manager
      
      </div>
      <div class="dropdown dropdown-bottom dropdown-end">
  <label tabindex="0" class=" m-1">
    <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" alt="" />
    
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 mr-3 shadow bg-slate-700 rounded-box w-52">
    <h1 className='text-blue-500 text-3xl bold uppercase text-center'>{user.name}</h1>
    <li ><Link  className='text-blue-500 text-xl bold btn btn-outline m-3'  to='/update-profile'>Profile</Link></li>
    <li ><Link className='text-blue-500 text-xl bold btn btn-outline m-3 ' to='/'>DashBoard</Link></li>
    <li onClick={logout} className='text-blue-500 text-xl bold btn btn-outline m-3'>Log Out</li>
  </ul>
</div>
     
    </div>
    {/* <!-- Page content here --> */}
   {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default NavBar;