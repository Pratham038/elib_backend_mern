/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction,Request,Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
const app = express();

app.get('/',(req,res, next)=>{
res.json({appName : " elib backend"})
})


app.use('/api' , userRouter);

app.use(globalErrorHandler);

export default app; 