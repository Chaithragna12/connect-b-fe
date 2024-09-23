const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const db=async()=>{
    try{
        await mongoose.connect(process.env.DBCONNECT);
        console.log("Data base is connected");
    }
    catch(err){
        console.log('Db connection error',err)
    }
}
module.exports=db