const express = require('express');
const router = express.Router();
const { signup, login, logout, changePassword, deleteUser } = require('../controllers/queries');



router.post('/signup', signup);
router.post('/login', login);
router.post('/change',  changePassword);
router.delete('/delete',  deleteUser);
router.post('/logout', logout);

module.exports = router;
