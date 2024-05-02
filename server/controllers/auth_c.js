const mongoose = require("mongoose");
const users = require('../models/User_Model')

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Create a new user instance
        const newUser = new users({
            Username: username,
            Email: email,
            Password: password,
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) =>{
    try{
        const {username,password} = req.body;

        const exUser = await users.findOne({Username:username});
        console.log(exUser)
        if(exUser){
            
            if(exUser.Password === password){

                return res.json(
                    "Welcome",
                    
                    
                )
            }else{
                return res.json(
                    "Password PID"
                )
            }
        }else  {
            return res.json(
                "Samuk Korn"
            )
        }  
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};