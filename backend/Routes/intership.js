const express = require('express');
const route = express.Router();
const Intership = require ('./../Models/Intership');
const jwt=require('jsonwebtoken');
const Category = require('../Models/Category');
const UserCompany= require('../Models/UserCompany')
const verify  = require('./../middelware/check-auth');

//list of all the interships
route.get('/list',(req,res)=>{
    Intership.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in retriving Posts:'+JSON.stringify(err,undefined,2));
        }
    })
});


//list of all the intership apparteing in a spacefic category



//adding an intership
route.post('/add/:id',async(req,res)=>{
    console.log(req.params.id)

    //find the user who added the intership
   const user  = await UserCompany.findOne({
      _id:req.params.id
   });

   if(!user) res.status(500).send('we cant find the user');


   const savestage= await new Intership ({
    description:req.body.description,
    nameintership:req.body.nameintership,
    category:req.body.category ,
    userId: user._id,
    datefrom:req.body.datefrom,
    dateto:req.body.dateto,
   
   });
   console.log(savestage.id);
   savestage
   .save()

   .then(result=>{
     console.log(result);
     res.status(201).json({
       message:'Intership stored',
     

     });
   })
   .catch(err=>{
     console.log(err);
     res.status(500).json({
       error:err
     });
   });

});


//updating an inteship
route.put('/updateIntership/:id',verify,(req,res)=>{

    const inter = new Intership({
        nameintership : req.body.nameintership,
        description : req.body.description,
        category : req.body.category,
        id: req.body._id
        
    });
    
    inter.save()
        .then(res=>{
            res.status(200).json({
                message:'Intership Updated'
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'Failed to update'
            })
        })

});

//getting a single intership
// route.get('/:name',(req,res)=>{
   
    
//     const inter = Intership.findOne({
//         nameintership:req.params.name
//     })
//         .then(res=>{
//             if(res){
//                 res.status(200).json(res.inter._id);
//             } else{
//                 res.status(400).json({message:'Intership not found'})
//             }

           
//         });


//delleting a single intership
route.delete('/delete/:name',(req,res)=>{
    Intership.deleteOne({nameintership:req.params.name})
        .then(res=>{
          
                res.status(200).json({
                    message:'Deleted'
                });
           
        })
        .catch(err=>{
            res.status(500).json({
                message:'Failed to update'
            })
        })
});

module.exports = route;