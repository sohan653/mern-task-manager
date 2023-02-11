import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import CancelledTask from './Pages/MyTask/CancelledTask';
import CreateTask from './Pages/MyTask/CreateTask';
import FinishedTask from './Pages/MyTask/FinishedTask';
import MyTask from './Pages/MyTask/MyTask';
import NewTask from './Pages/MyTask/NewTask';
import ProcessingTask from './Pages/MyTask/ProcessingTask';
import NavBar from './Pages/NavBar/NavBar';
import UpdatePage from './Pages/UpdatePage/UpdatePage';


function App() {
  const [auth,setAuth]=useState(false)
  const [user,setUser]=useState({})
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('user'))
    setUser(data);
   if(data?.token){
    setAuth(true)
   }
  },[])
 
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = user?.token || '';
  
  
// iff login is true
if(auth=== true){
  return <>
            <NavBar>
              <Routes>
                <Route path='/' element={<Dashboard/>}>
                  <Route path='' element={<MyTask/>}></Route>
                  <Route path='create' element={<CreateTask/>}></Route>
                  <Route path='new' element={<NewTask/>}></Route>
                  <Route path='processing' element={<ProcessingTask/>}></Route>
                  <Route path='finished' element={<FinishedTask/>}></Route>
                  <Route path='cancelled' element={<CancelledTask/>}></Route>
                </Route>
                <Route path='/update-profile' element={<UpdatePage/>}></Route>
              </Routes>
            </NavBar>  
          </>
}
else{
 return <> <Routes>
   
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
  </Routes>
  </>
}



}




export default App;
