import User from './../models/User.js'
import bcryptjs from "bcryptjs";


const postSignup = async (req, res) => {
    const { name, email, password, dob } = req.body;
    const hashpassword = await bcryptjs.hash(password, 10);
    const user = new User({
        name,
        email,
        password : hashpassword,
        dob: new Date(dob)
    });

    try {
        const saveUser = await user.save()

        res.json({
            success: true,
            message: 'User created successfully',
            data: saveUser
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }
        res.json({ success: true, message: "Login successful", data: user });
    } catch (err) {
        res.json({ success: false, message: "Failed to login", error: err.message });
    }
}

export { postSignup, postLogin }