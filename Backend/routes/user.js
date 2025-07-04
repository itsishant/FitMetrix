const express = require("express");
const useRouter = require("./user");
const { parse } = require("zod/v4-mini");
const zod = require("zod");
const { email } = require("zod/v4");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middleware");
const jwt = require("jsonwebtoken");

const router = express.Router();
    
const signupSchema = zod.object({ 
    firstname: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})



router.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    if(!success){
        return res.status(403).json({
            message: "error while signing-up"
        })
    }  

    const emailExist = await User.findOne({
        email: body.email
    })

    if(emailExist){
        return res.status(403).json({
            message: "Email is already exists"
        })
    
    }

    const newUser = await User.create({

        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password

    })

   const userId = newUser._id;


    if(newUser){
    const token = jwt.sign({
        userId: newUser._id
    }, JWT_SECRET);

    return res.status(200).json({
        message: "User created successfully",
        token: token
    });
}


})



const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
})


router.post("/signin", async (req, res) => {
    const body = req.body;
    const {success} = signinSchema.safeParse(body);

    if(!success){
        return res.status(403).json({
            message: "invaild inputs"
        })
    }

    const existingUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(existingUser){
        const token = jwt.sign({
        userId: existingUser._id
        }, JWT_SECRET)

        res.json({
            message: "signed in successfully",
            success: true,
            token: token
        })

        return;
    }

    return res.status(400).json({
        message: "Error while login"
    })
})


const updateSchema = zod.object({
    firstname: zod.string()
})

router.put("/", authMiddleware, async (req, res) => {
    const body = req.body;
    const {success} = updateSchema.safePars(body);
    
    if(!success){
        return res.status(400).json({
            "message": "invaild inputs"
        })

    }

    const nameUpdate = User.updateOne({
        _id: req.nameUser._id
    }, req.body);

    res.status(200).json({
        message: "updated successfully"
    })

})

module.exports = router;