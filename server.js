const express = require("express")

const student = require("./validator/valid")
require("./connection/config")
const app = express()
const port = 5000;

app.use(express.json())


app.post("/api/students", async(req, res)=>{
     const data = await new student(req.body)
    let result = await data.save()
    console.log(result);
    res.status(201).send(req.body) 
    // res.send("Created")
    
})

app.put("/api/students/update/:id", async (req, res) => {
    
    const id = req.params.id
    await student.findByIdAndUpdate(id, req.body)
        res.status(201).send(req.body)
  
})

app.delete("/api/students/delete/:id" , async (req, res)=>{
    const id = req.params.id
  const deleteData = await student.findByIdAndDelete(id, req.body)
    res.status(202).send(deleteData)
})


app.get("/api/students/list", async (req, res)=>{

        const data = await student.find()
        res.send(data)
})



app.listen(port , ()=>{
    console.log(`Server is Running on http://localhost:5000`);
})