import dotenv from "dotenv";
dotenv.config();
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import cors from "cors";
import path from "path";

const {default: rateLimiter}= await import("./middleware/rateLimiter.js");

const app = express();

if(!process.env.NODE_ENV === "production"){
app.use(cors({
    origin : "http://localhost:5173",
}));
}
 
const __dirname = path.resolve()

app.use(express.json())

app.use(rateLimiter);



// app.use((req,_,next)=>{
//     console.log(`Request Method is ${req.method} and Request URL is ${req.url}`);    
//     next();
// })

app.use("/api/notes", notesRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*path}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

connectDB().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log("Server Started")
    });
});

