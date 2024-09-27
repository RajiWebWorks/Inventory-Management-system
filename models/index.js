const mongoose = require("mongoose");
const uri = "mongodb+srv://rajiraji33:raji27@cluster0.0hjyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };