const mongoose = require("mongoose");
const user = require('../models/User_Model');
const blox_components = require('../models/Blox_Model')
const { Collection } = require("mongodb");

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Create a new user instance
        const NewUser =new user({
            Username: username,
            Email: email,
            Password: password,
        });

        // Save the new user to the database
        await NewUser.save();

        res.status(201).json({ message: 'User created successfully', NewUser: user });
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

exports.create_b = async (req,res) =>{
    try{
        const {title_, tag_, content_,user_} = req.body
        const newblox = new blox_components 
        ({
            title: title_,
            tag: tag_,
            content: content_,
            by:user_
        });
        console.log("Happy")
        // Save the new user to the database
        await newblox.save();
        return res.json(
            "Done!"
        )

    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}