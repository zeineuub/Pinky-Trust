const express = require('express');
const route= express.Router();
const Category = require('./../Models/Category');

route.post('/addCategory',(req,res)=>{
    Category.findOne({
        namecategory: req.body.  namecategory
    })
    .then( category =>{
        if(category)
        {
            res.status(500).json({
                message: 'Category already exists'
            });
        }
        category.save()
        .then(result=>{
            console.log(result);
            res.status(201).json({
              message:'Categoty stored',
       
            });
          })
          .catch(err=>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
    });
});

// route.get('/listCategory', (req,res) =>)
module.exports=route;