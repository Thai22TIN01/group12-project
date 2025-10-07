// Mảng tạm để lưu user
let users = [];

// [GET] /users -> Lấy danh sách user
exports.getUsers = (req, res) => {
  res.json(users);
};

// [POST] /users -> Thêm user mới
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now().toString(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};
