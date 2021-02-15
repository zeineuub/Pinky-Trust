const express = require('express');
const route = express.Router();
const User = require ('./../Models/User');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const Usercompany = require('../Models/UserCompany');
const { update } = require('../Models/UserCompany');
route.post('/registration', async(req,res)=>{
console.log(req.body.email);

  //checking if the user is already in the database
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('email already exists');
 
  //hash  passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.pwd, salt);

  let userData =  new User({

      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      pwd: hashedPassword,

  });
  if(userData.pwd==undefined) return res.status(500).send('password empty')
  let user = new User(userData)
  user.save((error, registeredUser)=>{
      if(error){
          console.log(error)
      } else {
        let payload = { subject: registeredUser._id};
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({token});
        
      }
  })
});
route.post('/login',(req,res)=>{
    let getUser;
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "User not Found"
            });
        }
        getUser = user;
        //verify matches passwords
        return bcrypt.compare(req.body.pwd, user.pwd);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Wrong password"
            });
        }
        let jwtToken=jwt.sign({email:getUser.email,userId:getUser._id},"secretkey",{expiresIn:"1h"});
        console.log(jwtToken)
        res.status(200).json({
            token :jwtToken,
            expiresIn: 3600,
           _id: getUser._id
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});
route.post('/registrationCompany', async(req,res)=>{

    const emailExist = await Usercompany.findOne({emailcompany: req.body.emailcompany});
    if(emailExist) return res.status(400).send('email already exists');
  
    //hash  passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwdcompany, salt);
    console.log("has"+hashedPassword)
    let userData =  new Usercompany({
  
        namecompany: req.body.namecompany,
        emailcompany: req.body.emailcompany,
        pwdcompany: hashedPassword,
        description: req.body.description,
        imageUrl:req.body.imageUrl
  
    });
    if(userData.pwdcompany==undefined) return res.status(500).send('password empty')
    let user = new Usercompany(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    })
  });

route.post('/loginCompany',(req,res)=>{
    let getUser;
    Usercompany.findOne({
        emailcompany: req.body.email
    }).then(user => {
        if (!user) {
            
            return res.status(401).json({
                message: "user not found"
            });
        }
        console.log(user);
        getUser = user;
        //verify matches passwords
        return bcrypt.compare(req.body.pwd, user.pwdcompany);
    }).then(response => {
        if (!response) {
            console.log(getUser);
            return res.status(402).json({
                message: "Authentication failed"
            });
        }
        let jwtToken=jwt.sign({email:getUser.email,userId:getUser._id},"secretkey",{expiresIn:"1h"});
        console.log(jwtToken);
        res.status(200).json({
            token :jwtToken,
           _id: getUser._id
        });
    }).catch(err => {
        return res.status(405).json({
            message: "failed"
        });
    });
});

route.get('/me/:id', async(req,res) => {
    await User.findById({
        _id:req.params.id

    })
    .then(user=>{
        console.log(user);
        res.status(200).json({user});
    })
    .catch(error=>{
        return res.status(405).json({
            message: "User not found"
        });
    })
});

// Get Single User
route.get('/user-info/:id',(req, res, next) => {
    User.findById(req.params.id, (error, data) => {
       
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});
route.put('/update/:id', async(req,res,next) =>{
    User.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(result =>{
        res.status(200).json({
            message:' User updated'
        })
    })
    .catch(error=>{
        return res.status(405).json({
            message: "impossible"
        });
    })
});

module.exports = route;
