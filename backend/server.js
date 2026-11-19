import express from "express"

const app = express();
const port = 4000

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server is started on https://localhost:${port}`)
});