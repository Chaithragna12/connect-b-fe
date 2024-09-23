const express=require('express');
const cors=require('cors')
const db=require('./src/config/dbconnection')
const routes=require('./src/routes/routes')
db();
const app=express();
app.use(express.json());
app.use(cors());
app.use('/api',routes)
const port=3000
app.listen(port,()=>{
    console.log(`Server is running with the port number is ${port}`);
})