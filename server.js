//const express = require('express');
//const app = express();
//app.use(express.json());
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js (BE)
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());          // QUAN TRỌNG khi FE gọi URL tuyệt đối
app.use(express.json());

let users = [{ id:1, name:"Alice", email:"alice@mail.com" }];

app.get("/users", (req,res)=> res.json(users));

app.post("/users", (req,res)=>{
  const { name, email } = req.body || {};
  if (!name || !email) return res.status(400).json({ message:"name and email are required" });
  const newUser = { id: Date.now(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, ()=> console.log("API on http://localhost:3000"));
