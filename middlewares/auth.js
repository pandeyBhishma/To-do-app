import { User } from "../models/userschema.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            success: false,
            message: 'login first'
        })
    };

    const decordedData = jwt.verify(token, "hulk");
    req.user = await User.findById(decordedData._id);
    next()

}