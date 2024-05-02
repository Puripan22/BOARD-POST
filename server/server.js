const mongoose = require("mongoose");
//const anth_c = require("controllers/auth_c.js");
const express = require("express");
const cors = require("cors");

const app = express();
const AuthRoutes = require("./routes/auth")

//connect
mongoose
    .connect('mongodb+srv://poohvs555:1234@cluster0.sabvxtw.mongodb.net/User', {
        useNewURLParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Connected"))
    .catch((err)=>console.log("err"))


app.use(express.json());   
app.use(express.urlencoded({ extended: true }));
app.use(cors());
      
app.use("/api", AuthRoutes);

app.listen(8000, () => console.log(`start server on port 8000`));