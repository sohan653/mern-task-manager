const mongoose = require('mongoose');

const OTPSchema= mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    OTP:String,
    status:{
    type:Number,
    enum:[0,1],
    default:0
    }
    
},{ timestamps:true,
    versionKey:false });
    //  after 3 minutes status will be 0
 OTPSchema.post('save', function (doc) {
        setTimeout(() => {
            if (doc.status === 1) {
                doc.status = 0;
                doc.save();
            }
        }, 3 * 60 * 1000);
});

const OTP=mongoose.model('OTP',OTPSchema);

module.exports = OTP;