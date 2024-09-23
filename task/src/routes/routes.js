const express=require('express');
const {signup}=require('../controllers/queries');
const router=express.Router();
router.post('/signup',signup);

module.exports=router;