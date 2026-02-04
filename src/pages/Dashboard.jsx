import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate()
  const [tasks,setTask]=useState([])

   useEffect(()=>{
    fetchData();
   },[])

  const fetchData = async()=>{
    try{
      const response = await fetch("http://localhost:3000/tasks");
      const data = response.json();
      setTask(data);
    }
    catch(error){
      console.log(error)
    };
  }
  const handleLogout=() => {
  
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    //localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout}/>
      <h1>MY TASKS</h1>
      <TaskList/>
      <p>Welcome! You are logged in 🎉</p>
    </div>
  );
};

export default Dashboard;
