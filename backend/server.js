// server.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

// ✅ Route test (kiểm tra server hoạt động)
app.get('/', (req, res) => {
  console.log('🟢 Route / được gọi!');
  res.send('🚀 Backend Node.js đang hoạt động!');
});

// Start server
app.listen(3000, () => {
  console.log('✅ Server đang chạy tại http://localhost:3000');
});
