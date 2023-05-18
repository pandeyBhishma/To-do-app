import jwt from "jsonwebtoken";

export const getCookie = async(user, res,message, statuscode = 200)=>{
    const token = jwt.sign({_id:user._id}, "hulk")

    res.status(statuscode).cookie('token', token,{
        httpOnly: true,
        maxAge: new Date(Date.now(15*60*1000))
    }).json({
    success: true,
    message,
    })

} 