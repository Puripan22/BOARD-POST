const express = require("express");
const routor = express.Router();
const {
  signup,
  login,
  create_b,
  GetPost,
  MinePost,
  WhereTag,
} = require("../controllers/auth_c");

routor.post("/login", login);
routor.post("/signup", signup);
routor.post("/create_b", create_b);
routor.get("/GetPost", GetPost);
routor.post("/MinePost", MinePost);
routor.post("/Search", WhereTag);
module.exports = routor;
