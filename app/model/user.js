const mongosee = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongosee.Schema

const formSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        minlength:3,
        
    },
    password:{
        type:String,
        required:true,
        minlength:3,
        maxlength:120
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(email){
                 return validator.isEmail(email)
            },
            message:function(){
                return 'invalid email formate'
            }
        }
    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
})

formSchema.methods.generateToken=function(){
    const user = this
    const tokenData = {
        _id:user._id,
        username:user.username,
        createdAt:Number(new Date())
    }
    const token = jwt.sign(tokenData,'naveen@007')
    user.tokens.push({
        token
    })
    return user.save()
    .then((user)=>{
        return Promise.resolve(token)
    })
    .catch((err)=>{
        return Promise.reject(err)
    })

}

formSchema.statics.findByToken=function(token){
    const User=this
    let tokenData

    try{
        tokenData=jwt.verify(token,'naveen@007')
    }catch(err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id:tokenData._id,
        'tokens.token':token
    })

}



formSchema.pre('save',function(next){
    const user = this
    if(user.isNew){
       bcryptjs.genSalt(10)
       .then((salt)=>{
           bcryptjs.hash(user.password,salt)
           .then((encrypt)=>{
            
            user.password = encrypt
               next()
           })
       })
    }else{
        next()
    }
})

formSchema.statics.findbyCredintails=function(email,password){
    const User = this
    return User.findOne({email:email})
    .then((user)=>{

        if(!user){
            return Promise.reject('invalid email/password')
        }
        return bcryptjs.compare(password,user.password)
        .then((result)=>{
            
            if(result){
                return Promise.resolve(user)
                
            }else{
                return Promise.reject('invalid password,email')
            }
        })
    })
    .catch((err)=>{
        return Promise.reject(err)
    })

   
      
    
    
}

const User = mongosee.model("User",formSchema)


module.exports = User