import User from './../models/User.js'

const postSignup = async (req, res)=>{
    const {name, email, password, dob} = req.body;
    const user = new User({
        name, 
        email, 
        password,
        dob: new Date(dob)
    });

    try{    
    const saveUser = await user.save()

    res.json({
        success: true,
        message: 'User created successfully',
        data: saveUser
    })
    }
    catch(e){
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }

}

const postLogin =async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({
        email: email,
        password: password,
    });
    if(user){
        return res.json({
            success: true,
            message: 'User logged in successfully',
            data: user
        })
    }
    else{
        return res.json({
            success: false,
            message: 'Invalid email or password',
            data: null
        })
    }
}

export {postSignup, postLogin}