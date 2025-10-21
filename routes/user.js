const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD routes
router.get('/users', userController.getUsers);          // Lấy danh sách
router.post('/users', userController.createUser);       // Tạo mới
router.put('/users/:id', userController.updateUser);    // Cập nhật (PUT)
router.delete('/users/:id', userController.deleteUser); // Xóa (DELETE)

module.exports = router;
