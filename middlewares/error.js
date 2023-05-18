
class errorHandler extends Error{
constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;
}
}

export const errorMiddleware = (err,req,res,next)=>{

err.message = err.message || "internal serve error"
    return res.status(404).json({
        success: false,
        message: 'user already exist'
    })
}

export default errorHandler;