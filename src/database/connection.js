const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentsApi" ,
{useCreateIndex:true , useFindAndModify: false , useUnifiedTopology : true, useNewUrlParser: true } )
.then( ()=>{console.log("connection Successful")})
 .catch((err)=>{
   console.log(`this is your ${err}`)
 });