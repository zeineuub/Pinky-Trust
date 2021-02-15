const mongoose=require('mongoose');
const CompanySchema=new mongoose.Schema({
    //les attributs fil db
    namecompany:{
      type:String,

      min:6,
      max:255
  },
    emailcompany:{
        type:String,

        max:255,
        min:6
    },
    pwdcompany:{
        type:String,

        max:1024,
        min:8,
    },
    description:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const Usercompany=mongoose.model('Usercompany',CompanySchema);
module.exports=Usercompany;
