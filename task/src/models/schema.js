const mongoose =require('mongoose');

const adminschema=new mongoose.Schema({
    Name:{
        type:String,
        require:true,
        unique:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
},{timestamps:false})
const app=mongoose.model('admin',adminschema);
module.exports=app