const mongoose=require('mongoose');
const listSchema=mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:String,
    },
    Myid:{
        type:String,
        default:Date.now().toString(),
        required:true
    }
});
const todo=mongoose.model('todo',listSchema);
module.exports=todo;