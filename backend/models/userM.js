const mongoose=require('mongoose');
const vailidator=require("validator");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const crypto = require("crypto");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Enter your name'],
        maxlength:[30,"name can not be eceed more then 30 charecter"],
        minlength:[4,'name should have at least 4 charecter ']

    },
    email:{
        type:String,
        required:[true,'Please Enter your email'],
        unique:true,
        validate:[vailidator.isEmail, "please enter a vailid email "]
    },
    password:{
        type:String,
        required:[true,'Please Enter your password'],
        unique:true,
        minlength:[8,'password should have at least 8 charecter '],
      select:false
    },
avatar:{
    
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },     
},
role:{
    type:String,
    default:'user'
},
createdAt:{
  type:Date,
  default:Date.now,
},
resetPasswordToken:String,
resetPasswordExpire:Date,

});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next();
  }
  this.password= await bcrypt.hash(this.password,10);
})

// jwt token 
userSchema.methods.getJWTToken=function(){

  return jwt.sign({id:this._id},process.env.SECRET_KEY,{
    expiresIn:process.env.TOKEN_EXPIRE
  })
}


// compare password 
userSchema.methods.comparePassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
}


// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const User=mongoose.model('User',userSchema);
module.exports=User;