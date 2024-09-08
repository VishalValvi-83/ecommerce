import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt"
import User from "./models/User.js"; 

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

// Health check route
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is Running",
        data: null,
    });
});

// Login route
app.post('/login', async (req, res) => {
    console.log("Login request received");
    console.log("Request body:", req.body);
    
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email: new RegExp('^' + email + '$', 'i') });

        if (!user) {
            console.log("User not found");
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Invalid credentials");
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("Token generated:", token);

        // Respond with the token
        res.json({ token });
    } catch (error) {
        console.error("Error during login:", error);  // Log the full error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
