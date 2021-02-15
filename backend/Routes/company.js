const express = require('express');
const route = express.Router();
const UserCompany = require('./../Models/UserCompany');

route.get('/details',(req,res) => {
    console.log(req.query.namecompany);
    UserCompany.findOne({
        namecompany:req.query.namecompany
    })
    .then(company => {
        if(!company)
        {
            return res.status(401).json({
                message: "Company ot found"
            });
        }
        else{
            res.send(company);
        }

    });

});



module.exports = route