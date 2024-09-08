import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { postLogin, postSignup } from "./controllers/user.js";
// import bcrypt from "bcrypt"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); 
    }
};
connectDB();

app.get('/', (req, res) =>{
    res.send('Hello from the server!')
})
// Health check route
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is Running",
        data: null,
    });
});

// Login route
app.post('/login', postLogin)
// register route
app.post('/signup', postSignup)


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
