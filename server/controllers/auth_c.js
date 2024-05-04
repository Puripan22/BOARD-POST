const mongoose = require("mongoose");
const user = require('../models/User_Model');
const blox_components = require('../models/Blox_Model')
const { Collection } = require("mongodb");
const jwt = require("jsonwebtoken");
const env = require("dotenv");


exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const oldUser = await user.findOne({ Username: username });
        const oldEmail = await user.findOne({ Email: email });

        console.log(oldUser);
        console.log(oldEmail);
        if (oldUser) {
            return res.json("This username has been take.");
        }
        if (oldEmail) {
            return res.json("This email has been take.");
        }




        // Create a new user instance
        const NewUser = new user({
            Username: username,
            Email: email,
            Password: password,
        });

        //create token
        const token = jwt.sign(
            { uer_id: user._id, email },
            "process.env.TOKEN_KEY",
            {
                expiresIn: "2h"
            }
        )

        //save user token
        NewUser.Token = token;

        //return new user
        //res.status(201).json(user);

        // Save the new user to the database
        await NewUser.save();
        return res.json(
            NewUser
        )

        return res.status(201).json({ message: 'User created successfully', NewUser: user });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            return res.json(
                "All input is required"
            )
        }

        const exUser = await user.findOne({ Username: username });
        console.log(exUser)
        if (exUser) {

            if (exUser.Password === password) {
                const token = jwt.sign(
                    { uer_id: user._id, username },
                    "process.env.TOKEN_KEY",
                    {
                        expiresIn: "2h"
                    }
                )
                user.token = token;
                return res.json(
                    user
                )
            } else {
                return res.json(
                    "Password PID"
                )
            }


        } else {
            return res.json(
                "Samuk Korn"
            )
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.create_b = async (req, res) => {
    try {
        const { title_, tag_, content_, user_ } = req.body
        
        
        

            if (!title_) {
                return res.json(
                    "Title is required"
                )
            }
            if (!content_) {
                return res.json(
                    "Content is required"
                )
            }

            const newblox = new blox_components
            ({
                title: title_,
                tag: tag_,
                content: content_,
                by: user_
            });
            
            
        //console.log("Happy")
        // Save the new user to the database
        await newblox.save();
        return res.json(
            newblox
        )

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.GetPost = async (req, res) => {
    try {


        const AllPost = await blox_components.find({});
        return res.json(
            AllPost
        )
    } catch (error) {
        console.error('Error retrieving blox components:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

exports.MinePost = async (req, res) => {
    try {
        const { UserID } = req.body;
        const Data = await blox_components.find({ by: UserID });
        return res.json(
            Data
        )
    } catch (error) {
        console.error('Error retrieving blox components:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
