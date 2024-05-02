const express = require("express");
const routor = express.Router();
const { signup,login } = require("../controllers/auth_c");

routor.post("/login",login);
routor.post("/signup",signup);
module.exports = routor;

