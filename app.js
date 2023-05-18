import express, { json } from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskroutes.js";
import cookieParser from "cookie-parser";


export const app = express();


//using middlewares
app.use(express.json());
app.use(cookieParser())

//using routes
app.use("/user",userRouter);
app.use('/task', taskRouter)
