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
                         res.json({
                             success:true,
                             id:user[0]._id})     
                     }
                     res.json({success:false}) 
                 }).catch(error=> console.log('could not check if password match ', error)) 
                 }        
           })
            .catch(error=>console.log('could not find the user ',error))      
    })   
    
    app.post('/createInterview/:username',(req,res)=>{
        console.log('helloooooooooo' , req.params)
        const {username}= req.params
        User.findOne({username:username})
         .then(user=>{
             user.interviews.push(req.body)
             user.save()
             res.json(user)
         })
         .catch(err=> console.log('error creating interview ', err))
    })
    
    app.get('/userInterviews/:user_id',(req,res)=>{
        const {user_id}= req.params
        User.find({_id:user_id})
         .then(user=> {
            res.json({interviews:user[0].interviews})
        })
             
    })

}
