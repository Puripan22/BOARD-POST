const express = require("express");
const routor = express.Router();
const { signup,login,create_b } = require("../controllers/auth_c");

routor.post("/login",login);
routor.post("/signup",signup);
routor.post("/create_b",create_b);
module.exports = routor;

