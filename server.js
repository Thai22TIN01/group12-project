console.log("📁 Đang chạy file ở thư mục:", __dirname);

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

// ✅ Route test (đảm bảo đặt TRƯỚC app.listen)
app.get('/', (req, res) => {
  console.log('🟢 Route / được gọi!');
  res.send('🚀 Backend Node.js đang hoạt động!');
});

// Start server
app.listen(3000, () => {
  console.log('✅ Server đang chạy tại http://localhost:3000');
});
