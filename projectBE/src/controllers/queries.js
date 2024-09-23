const User = require('../models/schema');
const bcrypt = require('bcryptjs');
const generatetokensetcookie=require('../util/token')

const signup= async(req,res)=>{
  try{
      const {username,password}=req.body;
      const user=await User.findOne({username});
      if(user){
          return res.status(400).json({Error:`User Already exists`});
      }

      const salt=await bcrypt.genSalt(10);
      const hashedpassword= await bcrypt.hash(password,salt);
      const create=new User({username:username,password:hashedpassword});
      if(create){
          generatetokensetcookie(create._id,res);
          await create.save();
          console.log('New admin created');
          res.status(201).json({_id:create._id,username:create.username,})
      }
      else{
          res.status(400).json({error:'Invalid user data'});
      }

  }
  catch(error){
      console.log('Error:',error);
      res.status(500).send('internal server error');
  }
}
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ success: false, error: 'Invalid username or password' });
    }

    generatetokensetcookie(user._id, res);
    console.log("User logged in:", user);

    // Store username in session
    req.session.username = user.username;

    res.status(200).json({ success: true, username: user.username });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Logout
const logout=async(req,res)=>{
  try{
      console.log('Admin logout');
      res.cookie('jwt','',{maxAge:0});
      res.status(200).json({message:'logged out successfully'});
  }
  catch(error)
  {
      console.log('error in login controllers',error.message);
      res.status(500).json({error:'internal server error'})
  }
}


const changePassword = async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect old password' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Error changing password', error });
  }
};

const deleteUser = async (req, res) => {
  const { username, password } = req.body;
  try {
  
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

   
    await User.deleteOne({ username }); 
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error); 
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = { signup, login, logout, changePassword, deleteUser };
