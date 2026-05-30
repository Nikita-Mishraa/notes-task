const express = require ("express")

const app = express()

app.use(express.json())
const notes = []

app.post("/note", (req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message: "note created succesfully"
    })
})

app.get("/note", (req,res)=>{
    res.status(200).json({
        message: "note fetched",
        notes: notes
    })
})
app.delete("/note/:index", (req,res)=>{
    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message : "note deleted succesfully"
    })
})


module.exports = app