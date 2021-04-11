const express = require("express");
require('./database/connection');
const Mystudent= require("./models/student");
const app = express();

const port= process.env.Port || 3001;

app.use(express.json());

// app.get("/" , (req , res)=>{
//    res.send("Hello , let's build our own restful api ")
// } )


// app.post("/student" , (req , res)=>{
//     console.log(req.body);
//   const user = new  Mystudent(req.body);
//   user.save().then(()=>{
//      res.status(201).send(user)
//   }).catch((err)=>{
//      res.status(400).send(`there is some error here at ${err}`)
//   })

//   Using post method using Async and await

  app.post("/student", async(req , res)=>{

   try {

      const user = new  Mystudent(req.body);
      const createdata= await user.save();
      res.status(201).send(createdata)
   }
     catch(err) { res.status(400).send(`there is some error here at ${err}`)}

     



  })


 
  
  //  Now we will get the data from here ********:)-
  
  app.get("/student" , async(req , res)=>{
     
     try{
        
        const studedata= await Mystudent.find();
        res.send(studedata);
      }
      catch(er){`Your error is ${er}`}
      
   })

//  Doing Quaring using get method to fetch individuals data using their properties

app.get("/student/:id" , async(req , res)=>{
     
   try{
      const myid= req.params.id;
      const mongodata= await Mystudent.findById(myid);
      if(!mongodata){
         return res.status(404).send()

      } else{

         res.send(mongodata);
      }
    }
    catch(er){`Your error is ${er}`}
    
 })


//   Updating the data , Using patch method ******* 
//    Patch is used for update in existing data whereas Put is generally used for replacing the whole data .... 

    app.patch("/student/:id" , async(req , res)=>{

      try{
         const myid= req.params.id;
         const updatadate =await Mystudent.findByIdAndUpdate(myid , req.body , {new:true})
         res.send(updatadate)
      }catch(e){
         console.log(e)
      }

    })

   app.listen(port, ()=>{
      console.log(`connection is setup at ${port}`)
  })
