import { User } from "../models/userschema.js";
import bcrypt from 'bcrypt';
import { getCookie } from "../utils/feature.js";
import errorHandler, {  errorMiddleware } from "../middlewares/error.js";

//register function
export const register = async (req, res, next) => {
 try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email })

    if (user) {
      return next(new errorHandler("User Already exist" , 400))
    };

    const hashpass = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashpass,
    })
    getCookie(user, res, "registered sucessfully", 201)
 } catch (error) {
    next(error)
 }

}

//login function
export const login = async (req, res, next) => {
try {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new errorHandler("User Not Found" , 404))
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return next(new errorHandler("Invalid Email or Password" , 400))
      };


    getCookie(user, res, `welcome back, ${user.name}`, 200);
} catch (error) {
    next(error)
}

}

//get my details function
export const getMyProfile =(req, res, next) => {
    res.status(200).json({
        success: true,
        user: req.user,
    })

}

//logout function
export const logout = (req,res, next)=>{
    res.status(200).cookie("token" , "",{
        expire: new Date(Date.now())
    }).json({
        success: true,
        message: "you've logged out"
    })
}