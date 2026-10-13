import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully!");
    }catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}