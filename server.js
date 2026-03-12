const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port
const PORT = process.env.PORT || 5000;

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Import routes
const authRoutes = require('./server/routes/auth');
const launchpadRoutes = require('./server/routes/launchpad');
const smartContractRoutes = require('./server/routes/smartContract');
const userRoutes = require('./server/routes/user');
const presaleRoutes = require('./server/routes/presale');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/launchpad', launchpadRoutes);
app.use('/api/smartcontract', smartContractRoutes);
app.use('/api/user', userRoutes);
app.use('/api/presale', presaleRoutes);

// Serve client static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Bitcoin Meme Launchpad Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
