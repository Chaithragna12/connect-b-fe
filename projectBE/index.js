const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const authRoutes = require('./src/router/routes');
const db=require('./src/config/dbconnect')
const cors=require('cors')

db();
// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());
// MongoDB Connection
mongoose.connect(process.env.DBCONNECt)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


// Express Session Configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'mysecretkey',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.DBCONNECt,
    collectionName: 'sessions'
  }),
  cookie: { secure: false }
}));

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
