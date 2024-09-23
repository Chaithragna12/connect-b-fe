const bcrypt= require('bcrypt')
const schema =require('../models/schema');

 const signup= async(req,res)=>{
    try{
        const {Name,Email,Password}=req.body;
        const user=await schema.findOne({Email});
        if(user){
            return res.status(400).json({Error:`User Already exists`});
        }

        const salt=await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(Password,salt);
        const create=new schema({Name:Name,Email:Email,Password:hashedpassword});
        await create.save();
        console.log('New admin created');
        return res.status(201).json({ message: 'User registered successfully' });
    }
    catch(error){
        console.log('Error:',error);
        res.status(500).send('internal server error');
    }
}
module.exports={signup}