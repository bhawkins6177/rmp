// im goint to place the callback functions for my routes here
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

import User from '../models/userModel.js'

export const signin = async (req, res) => {
    const { email, password } = red.body;

    try {
        // search for user in database
        const existingUser = await User.findOne({ email })

        // if user does not exist return the 404 error
        if (!existingUser) return res.status(404).json({message: "User with that email does not exist"});

        // checks to see if the user entered the correct password, stores result as boolean
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        
        // if variable (isPasswordCorrect) is false return a 404 status with a message 
        if(!isPasswordCorrect) return res.status(400).json({message:"Password is incorrect."});

        // if variable (isPasswordCorrect) true store information into "token" 
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '1h'}, 'test', {expiresIn: "1h"});
        
        // send the token over
        res.status(200).json({ result: existingUser, token })
        
        
    } catch(err) {
        res.status(500).json({message: "error 500 something went wrong"})
    }

}

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName, address, tel } = req.body

    try {
        // search for user in database
        const existingUser = await User.findOne({ email });

        // if user exists return 400 status and message
        if (existingUser) return res.status(400).json({message: "A User with that email already exists"});

        // check to see if password and confirmPassword match, if they dont return 400 status and message
        if(password !== confirmPassword) return res.status(400).json({message: "Passwords dont match"});

        // hash the password. Has 2 perameters, first one is the string second one is the level of "difficulty"
        const hashedPassword = await bcrypt.hash(password, 12)

        // store the user in the database
        const result = await User.create({ email, password: hashedPassword, name:`${firstName} ${lastName}`, address, tel})

        //  create token || maybe add the other information here not sure
        const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn: '1h'}, 'test', {expiresIn: "1h"});

        // sends the token over 
        res.status(200).json({ result, token })

    } catch (err){ 
        res.status(500).json({message: "error 500 something went wrong"})
    }


}