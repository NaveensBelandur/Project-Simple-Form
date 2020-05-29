const User = require('../model/user')

module.exports.create=(req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
    .then((respo)=>{
        res.json({
            username:respo.username,
            password:respo.password,
            email:respo.email
        })
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.login=(req,res)=>{
    const body=req.body
    User.findbyCredintails(body.email,body.password)
    .then((user)=>{
       return user.generateToken()
    })
    .then((token)=>{
        res.json({
               'token':token
        })
    })
    .catch((err)=>{
        res.json(err)
    })
    
}

module.exports.account=(req,res)=>{
    const {user}=req
    User.findOne({
        _id:user._id
    })
    .then((ff)=>{
        res.json(ff)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.logout=(req,res)=>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(()=>{
        res.send('loged out succecfully')
    })
    .catch((err)=>{
        res.json(err)
    })
}