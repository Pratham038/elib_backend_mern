/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Response, Request } from "express";

export const UserController = {
    createUser: (req: Request, res: Response) => {
        res.json({messgage: "user reregisted"})
    },
    
};