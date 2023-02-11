const mongoose=require('mongoose');

const TaskSchema=mongoose.Schema({
    taskName:String,
    description:String,
    status:{
        type:String,
        enum:["new","processing","finished","cancelled"],
        default: "new"
    },
    user:String,
    userId:String,
   
},{ timestamps:true,versionKey:false})

const Task=mongoose.model('Task',TaskSchema)

module.exports=Task;