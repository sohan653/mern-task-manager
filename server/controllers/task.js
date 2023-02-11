const { createServices, isMatch } = require("../helpers/common");
const Task = require("../models/task");

exports.createTask= async (req,res)=>{
    try {

        const reqbody = req.body;
        const name=reqbody.taskName
        const taskName={
            taskName:name,
            userId:req.id

        }
        console.log(name)
        const isTaskMatch=await isMatch(Task,taskName)
        
       
        if(isTaskMatch.length>0){
            res.json({
                error: "Task already exists"
            })
        }
        else{
            reqbody.user=req.user;
            reqbody.userId=req.id
           
            const taskData=await createServices(reqbody,Task)
                res.json({
                    data:taskData
                })
        }
        
    } catch (error) {
       console.log(error) 
    }
}

exports.filterByStatus=async (req,res)=>{
      const{status}=req.params;
  try {
    const taskQuery={
        status,
        userId:req.id
    }
    const task=await isMatch(Task,taskQuery);
        if(task){
            res.json({
            data:task
            })
        }
        else{
        res.json({
            error: "Task not found"
            })
        }
  } catch (error) {
    console.log(error)
  }
    
}


exports.updateByStatus=async (req,res)=>{
    const {status}=req.body;
    console.log(status)
    const id=req.params.id
    const userId=req.id;
    try {
        console.log('esechi')
        const updatedTask=await Task.findOneAndUpdate({
            _id:id,
            userId
        },{status:status},
        {new:true})
       res.json(updatedTask)
    } catch (error) {
        console.log(error)
    }
}

exports.getMyTasks=async (req,res)=>{
    const id=req.id
    try {
        const myTask=await Task.find({userId:id})
        res.json({
            data:myTask
        })
    } catch (error) {
        console.log(error)
    }
}



exports.deleteTask=async (req,res)=>{
try {
    const id=req.params.id;
    const deletedTask=await Task.findByIdAndDelete(id);
    if(deletedTask){
        res.json({
            message:"successfully deleted"
        })
    }
} catch (error) {
    console.log(error)
}
}