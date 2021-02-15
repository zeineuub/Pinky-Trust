const mongoose=require('mongoose');
const IntershipSchema=new mongoose.Schema({
 
    userId:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Usercompany',
      required:true

    },
    
    nameintership:{
      type:String,

      max:255,
      min:6
  },
    description:{
        type:String,

        max:1024,
        min:8
    },
    category : {
      type:String
    },
    datefrom : {
      type:String
    },
    dateto : {
      type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

});
const Intership=mongoose.model('Intership',IntershipSchema);
module.exports=Intership;
