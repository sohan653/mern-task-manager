const express = require('express');
const { register, login, selectProfile, changePassword, checkLogin, updateUser, sendOTP } = require('../controllers/user');
const { requireSignIn } = require('../middlewars/authVerify');
const router=express.Router();
router.post('/register',register);
router.post('/login',login);
router.get('/my-profile',requireSignIn,selectProfile);
router.post('/update-profile',requireSignIn,updateUser);
router.post('/change-password',requireSignIn,changePassword);
router.get('/check-login',requireSignIn,checkLogin);


router.post('/send-otp',sendOTP)

module.exports = router;