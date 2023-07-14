const express=require('express');
const morgan=require("morgan");
const bodyParser=require("body-parser");
const db=require("./database");
const routes=require('./routes/index');
const app=express();
const PORT= process.env.port || 9000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use('/api/v1', routes);

app.use((req,res,next)=>{
      const err=new Error;
      err.status=200;
      res.send({
        status:err.status,
        message:"Route not found"
      })
})


app.listen(PORT, ()=>{
  console.log(`server is running at ${PORT}`);
  db.connect((error)=>{
    if(error){
      console.log("Connection Failed ", error);
      return;
    }
    console.log("Connection Successfully Established!!");
  })
})