const mongoose = require("mongoose");
const { email, string } = require("zod/v4");
async function connectDB(){
    try{
        console.log("Connected to mongodb");
    }
    catch(err){
        console.log("error in connecting");
    }
}

connectDB();

const userSchema = new mongoose.user({
    username: String,
    email: String,
    password: String
    
})

const user = mongoose.model('user', userSchema);

module.exports = {
    user
}