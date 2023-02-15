const { isMatch } = require("../helpers/common");
const OTP = require("../models/otp");
const User = require("../models/user");

exports.checkStatus=async(req,res,next)=>{
    const {email}=req.body;
    const status={
        email: email,
        status:1,
    }
    try {
        const matchStatus= await isMatch(OTP, status);
        
        if(matchStatus.length > 0){
            const user= await User.findOne({ email: email})
           req.id=user._id;
           next()
        }else{
            res.json({error:"status not found "})
        }
        
    } catch (error) {
        
    }
}