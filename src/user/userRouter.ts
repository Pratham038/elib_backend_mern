import express from "express";
import { UserController } from "./userController";

const userRouter = express.Router();

userRouter.post('/register' , UserController.createUser)

export default userRouter;