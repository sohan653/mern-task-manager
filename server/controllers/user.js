const { isMatch, createServices } = require("../helpers/common");
const User = require("../models/user");
const jwt=require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcrypt');
const OTP = require("../models/otp");


// comfigure sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.register=async(req,res)=>{
    try{
        const reqBody=req.body;
        const {email}=reqBody;
        const emailName={
            email:email
        }
        // macthing email address
        const matchUser= await isMatch(User,emailName)
        if(matchUser.length>0){
            res.json({
                error: "User already exists"
            })
        }

        // create new user
       else{

        const user= await createServices(reqBody,User)
        const payload={
            _id:user._id,
            name:user.name,
        }
        // send email in OTP;
        await OTP.create(emailName);
  const token= jwt.sign(payload,"sohanur653",{
    expiresIn:"30days"
   })
    res.json({
        data:user,
        token
    })
       }
}
catch (error){
    res.json({error:error.message})
}
}

exports.login=async (req,res)=>{
    try {
     const {email,password} = req.body
     const emailName={
         email:email
     }
     if(!email || !password){
         return res.status(403).json({
             error:"please insert your credential"
         })
     }
   const matchUser= await isMatch(User,emailName);
   
 const user=matchUser[0]
   const payload={
     _id:user._id,
     name:user.name,
   }
     if(user){
         
         const matchPassword= bcrypt.compareSync(password,user.password);
         
         if(matchPassword){
             const token= jwt.sign(payload,"sohanur653",{expiresIn:"30days"})
             res.json({data:payload,token})
         }else{
             res.json({
                 message:"password did not match"
             })
         }
     }else{
         console.log("user did not find")
     }
     
    } catch (error) {
     res.json({error:error.message})
    }
 }

// change password

 exports.changePassword= async (req,res)=>{
    const {newPassword,confirmNewPassword} = req.body
    const id=req.id;
   
    try {
        if(newPassword !== confirmNewPassword){
            res.json({
                error:"password not matched"
            })
        }else{
            const salt= bcrypt.genSaltSync(8)
            const hashPassword=bcrypt.hashSync(newPassword,salt)
        await User.updateOne({_id:id},{password:hashPassword});
        res.json({
            message:"successfully upadted"
        })
        }
    } catch (error) {
        res.json({
            error
        })
    }
};

exports.selectProfile=async (req,res)=>{
    const userId=req.id
   try {
    const user= await User.findOne({_id:userId}).select('-password');
    res.json(user)
   } catch (error) {
    
   }
}


exports.updateUser= async (req,res)=>{
    const userId=req.id;
    const reqBody=req.body;
  
    try {
        const updateUser=await User.findOneAndUpdate({_id:userId},reqBody,{
            new:true
        })
       res.json(updateUser) 
    } catch (error) {
        
    }
}


exports.checkLogin=async (req,res)=>{
    res.json({
        login:true
    })
}

// create OTP 

exports.sendOTP=async (req,res)=>{
    const {email}=req.body;
    const emailName={
        email
    }
    const OTPcode=Math.floor(100000 + Math.random() * 900000);
    const isMatchEmail= await isMatch(User,emailName)
    if(isMatchEmail.length>0){
        const newOTP=await OTP.findOneAndUpdate(emailName,{OTP:OTPcode},{new:true});
        // send email
        const msg = {
            to:email,
            from:'sohanurl653@gmail.com',
            subject: 'Your OTP',
            text: `Your OTP is: ${newOTP.OTP}`,
            html: `<p>Your OTP is: ${newOTP.OTP}</p>`,
        };
       sgMail
            .send(msg)
            .then(() => {
                res.json(newOTP)
            }, error => {
                console.error(error);

                 if (error.response) {
                console.error(error.response.body)
                }
                    });
    }
   
}
