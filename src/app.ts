/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction,Request,Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get('/',(req,res, next)=>{
res.json({appName : " elib backend"})
})

app.use(globalErrorHandler);

export default app; 