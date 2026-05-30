const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://user1:GO8SAPHr7MpaR5vb@notes-task.vgr3ktj.mongodb.net/nik")
    
    console.log("connected to DB")
}

module.exports = connectDB