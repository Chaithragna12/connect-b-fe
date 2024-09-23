const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.DBCONNECt)
        console.log('DB is connected')
    }
    catch(err){
        console.log('Error in connecting db',err)
    }
}
module.exports=dbconnect;