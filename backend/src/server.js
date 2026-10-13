import dotenv from "dotenv";
dotenv.config();
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import cors from "cors";

const {default: rateLimiter}= await import("./middleware/rateLimiter.js");

const app = express();

app.use(cors({
    origin : "http://localhost:5173",
}));
 


app.use(express.json())

app.use(rateLimiter);



// app.use((req,_,next)=>{
//     console.log(`Request Method is ${req.method} and Request URL is ${req.url}`);    
//     next();
// })

app.use("/api/notes", notesRoutes)


connectDB().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log("Server Started")
    });
});

