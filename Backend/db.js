const mongoose = require("mongoose");
const { email } = require("zod/v4");

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to mongodb");
    }
    catch(err){
        console.log("error in connecting");
    }
}

connectDB();

const userSchema = mongoose.Schema({
    firstname: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}