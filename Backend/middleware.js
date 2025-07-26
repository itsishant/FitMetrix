const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");

const auth = (req, res ,next) => {
    const token = req.headers.token;

    if(!token){
        return res.json({
            message: "Access denied. No token is provided"
        })
    }
    else{
        try{
        const decodedData = jwt.verify(token, JWT_SECRET) ;
        req.user = decodedData;
        next()
        }
        catch(error){
            res.json({
                message: "Invaild token"
            })
        }
    }
}

module.exports = auth;