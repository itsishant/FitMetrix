const mongoose = require("mongoose");
const { email, string } = require("zod/v4");
require("dotenv").config();

async function connectDB(){    
    try{
        mongoose.connect(process.env.MONGO_URL); 
        console.log("Connected to mongodb");
    }
    catch(err){
console.error("❌ Error connecting to MongoDB:", err.message);
           }
}

connectDB();

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
    
})

const user = mongoose.model('user', userSchema);

module.exports = {
    user
}

