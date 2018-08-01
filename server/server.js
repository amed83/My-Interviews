const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const routes = require('./routes');

const port = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myInterviewDb');


const app = express();
app.use(bodyParser.json())

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
    next()
})


routes(app)

app.listen(port,()=> console.log(`Server listening on ${port}`))