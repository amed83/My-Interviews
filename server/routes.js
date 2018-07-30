const User = require('./models/User');
const hashPassword = require('./hashPassword.js')
const checkPassword = require('./checkPassword.js')

module.exports = (app) =>{    
    app.post('/newUser',(req,res)=>{
        const {username,password} = req.body
        hashPassword(password)
         .then(hashPassword=> {
             const user = new User()
             user.username= username
             user.password= hashPassword
             user.save()
              .then(user=>res.json(user))
              .catch(err=>err)
         })        
    })

    app.post('/loginUser', (req,res)=>{
        const {username,password} = req.body
        User.find({username:username})
         .then(user=>{
             if(user.length<1){
                 res.json({success:false})
                 return
             }else{
                 checkPassword(password,user[0].password)
                 .then(result=>{
                     if(result){
                         res.json({success:true})     
                     }
                     res.json({success:false}) 
                    }) 
                 }        
           })
            .catch(error=>console.log('error ',error))      
    })   


}
