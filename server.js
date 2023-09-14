
//Server Instantiate
const express=require('express');
const app=express();

//Used to Parse Req.body in express ->PUT or POST
const bodyParser=require('body-parser')

//Specifically Parse JSON Data and add it to request.Body Object
app.use(bodyParser.json())

//activate server on 3000 port
app.listen(3000,()=>{
    console.log("Server Started on port 3000")
})

//Routes
//GET Request
app.get("/",(req,res)=>{
    res.send("Hello")
})

//Post Request
app.post("/api/cars",(request,response)=>{
    const {name,brand}=request.body;
    console.log(name)
    console.log(brand)
    response.send("Car Submitted Successfully")
})

const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/data",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection Successfull")})
.catch((error)=>{console.log(error)})