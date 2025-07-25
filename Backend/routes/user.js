const express = require("express");
const useRouter = require("./user");
const { parse } = require("zod/v4-mini");
const zod = require("zod");
const { email } = require("zod/v4");
const { user } = require("../db");
const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();
    
const signupSchema = zod.object({ 
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})


router.post("/signup", async (req, res) => {

    const checkEmail = await user.findOne({
        email: email
    })

    if(checkEmail){
        res.json({
            message: "Email already exists"
        })
    }else{

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.createOne({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const token = jwt.sign({
            username
        }, JWT_SECRET)

        res.json({
            message: "user created successfully",
            token: token
        })
    }

})


router.post("/signin", async (req, res) => {

    const userSignIn = await user.find({
        username: username,
        email: email,
    })

    if(userSignIn){

        const isPasswordValid = await bcrypt.compare(passowrd, userSignIn.passowrd);

        if(isPasswordValid){

        const token = jwt.sign({
            username
        }, JWT_SECRET)

        res.json({
            message: "User signed in successfully",
            token: token
        })
    }
    else{
        res.json({
            message: "Invaild credentials"
        })
    }
}
    else{
        res.json({
            message: "User not founded"
        })
    }

})


router.get("/dashboard", auth, (req, res) => {
    
})