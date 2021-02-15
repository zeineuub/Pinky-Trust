const express=require('express');
const app=express();
const auth=require('./Routes/auth');
const intership = require('./Routes/intership');
const company = require('./Routes/company');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
console.log('heree')
//route middleware for authentication
app.use('/api/auth',auth);
app.use('/api/intership',intership);

app.use('/api/company',company)


//Connect to Mango
//userNewPerser khater tajim tjina error
const db=require('./../config/key').MangoUrl;
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected Great ");
})
.catch(err=>console.log(err));

//Port
const port=process.env.PORT||3000;
//server listenning
app.listen(port,()=>console.log(`Server started at ${port}`))