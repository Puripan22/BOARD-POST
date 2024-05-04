const express = require("express");
const routor = express.Router();
const { signup,login,create_b,GetPost,MinePost } = require("../controllers/auth_c");

routor.post("/login",login);
routor.post("/signup",signup);
routor.post("/create_b",create_b);
routor.post("/GetPost",GetPost);
routor.post("/MinePost",MinePost);
module.exports = routor;

