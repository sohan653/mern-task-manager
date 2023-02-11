const express = require('express');
const { createTask, filterByStatus, updateByStatus, getMyTasks, deleteTask } = require('../controllers/task');
const { requireSignIn } = require('../middlewars/authVerify');
const router=express.Router();

router.post('/create-task',requireSignIn ,createTask);
router.get('/search/:status',requireSignIn ,filterByStatus);
router.post('/task/:id',requireSignIn ,updateByStatus);
router.get('/tasks',requireSignIn,getMyTasks);
router.delete('/task/:id',requireSignIn,deleteTask)


module.exports=router;