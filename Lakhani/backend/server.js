// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/shop', require('./routes/shopInfoRoutes'));
app.use('/api/wishlist', require('./routes/wishlistRoutes'));

// Simple health check route
app.get('/', (req, res) => {
  res.send('✅ Backend is running on Render!');
});

// Export the app
module.exports = app;
