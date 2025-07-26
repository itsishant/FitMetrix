const express = require("express");
const useRouter = require("./user");
const { parse } = require("zod/v4-mini");
const zod = require("zod");
const { email } = require("zod/v4");
const { user } = require("../db");
const { JWT_SECRET } = require("../config");
const  authMiddleware  = require("../middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
router.use(express.json());

// const signupSchema = zod.object({ 
//     username: zod.string(),
//     email: zod.string().email(),
//     password: zod.string().min(6)
// })


router.post("/signup", async (req, res) => {

    const { password } = req.body; 

    const checkEmail = await user.findOne({
        email: req.body.email
    })

    if(checkEmail){
       return res.status(403).json({
            message: "Email already exists"
        })
    }else{

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const token = jwt.sign({
            username: req.body.username
        }, JWT_SECRET)

        res.json({
            message: "user created successfully",
            token: token
        })
    }
})


router.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    if( !email || !password){
       return res.status(403).json({
            message: "Email and password are required"
        })
    }

    const userSignIn = await user.findOne({
        email
    })

    if(userSignIn){

        const isPasswordValid = await bcrypt.compare(password, userSignIn.password);

        if(isPasswordValid){

        const token = jwt.sign(
            {username: userSignIn.username}
        , JWT_SECRET,
    {expiresIn: "1h"});

       return res.json({
            message: "User signed in successfully",
            token: token
        })
    }
    else{
       return res.json({
            message: "wrong password"
        })
    }
}
    else{
       return res.json({
            message: "User not founded"
        })
    }

})

router.delete("/delete/:id", authMiddleware, async (req, res) => {

    const { id } = req.params;
    
    const deleteUser = await user.findByIdAndDelete(id);

    deleteUser ? res.status(200).json({
        message: "User deleted successfully"
    }) : res.status(403).json({
        message: "please try later"
    })

})

router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        name: req.user.username,
        message: "User profile fetched successfully"
    })
})

router.get("/dashboard", authMiddleware , (req, res) => {
    res.status(200).json({
        message: "you are on ddashboard section"
    })
})

router.get("/dashboard/workout", authMiddleware , (req, res) => {
    res.status(200).json({
        message: "you are on workout section"
    })
})

router.get("/dashboard/dietplan" ,authMiddleware , (req, res) => {
    res.status(200).json({
        message: "you are on workout section"
    })
})

router.get("/dashboard/aboutus",authMiddleware , (req, res) => {
    res.status(200).json({
        message: "your are on aboutus section"
    })
})

module.exports = router;
