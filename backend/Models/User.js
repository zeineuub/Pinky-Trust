const mongoose=require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname : {
        type: String,
        
    },
    lastname :{
        type:String,
        
    },
    email: {
        type:String,
        required :true
    },
    pwd  :{
        type:String,
        
    },
    date : {
        type:Date,
        default:Date.now
    }
});
const User = mongoose.model('User',UserSchema);
module.exports=User;