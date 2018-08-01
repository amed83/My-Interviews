const mongoose= require('mongoose')
const Schema = mongoose.Schema
const InterviewSchema = require ('./interview')

const UserSchema= new Schema({
       username:{
           type:String,
           required:true
       },
       password:{
          type: String,
          required:true
      },
       interviews:[InterviewSchema]
});

module.exports = mongoose.model('User', UserSchema)