import express from "express"
import { connectDB } from "./config/db.js";
import foodRouter from "./routers/foodRoute.js";

const app = express();
const port = 4000

app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))

app.listen(port,()=>{
    console.log(`Server is started on https://localhost:${port}`)
});