import express from "express"
import { connectDB } from "./config/db.js";

const app = express();
const port = 4000

connectDB();

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server is started on https://localhost:${port}`)
});