const mongoose = require("mongoose")
require("dotenv").config()



const connect = async () => {
    try{
        await mongoose.connect(
            process.env.CONNECTION_STRING
        )
        console.log("Connected to database!")
    }catch(error){
        console.log("Error connecting to the database:",error)
    }
}

module.exports = connect