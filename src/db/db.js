const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb://user1:GO8SAPHr7MpaR5vb@ac-myuzjzk-shard-00-00.vgr3ktj.mongodb.net:27017,ac-myuzjzk-shard-00-01.vgr3ktj.mongodb.net:27017,ac-myuzjzk-shard-00-02.vgr3ktj.mongodb.net:27017/?ssl=true&replicaSet=atlas-9uaeg4-shard-0&authSource=admin&appName=notes-task")
    console.log("connected to DB")
}

module.exports = connectDB