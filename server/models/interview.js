const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const InterviewSchema= new Schema({
      company:String,
      date: String,
      role:String,
      location:String,
      interviewNumber:Number,
      scheduledInterviews:Boolean
      
})

module.exports = InterviewSchema;