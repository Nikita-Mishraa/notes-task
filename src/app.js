const express = require ("express")
const postModel = require("./models/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service")

const app = express()
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req,res)=>{
    
    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    
    res.status(201).json({
        message: "Post created succesfully",
        post
    })
})

app.get("/posts", async (req,res)=>{
    
    
    
    res.status(200).json({
        message: "note fetched",
        
    })
})
app.delete("/note/:index", (req,res)=>{
    const id = req.params.index
    delete notes[index]

    res.status(200).json({
        message : "note deleted succesfully"
    })
})

app.patch("/note/:index", (req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description

    res.status(200).json()({
        message: "note updated"
    })
})

module.exports = app