import {
    authenticateUserService,
    registerUserService,
} from "../services/auth.service";
import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
    const user = await registerUserService(req.body);

    if (user) {
        res.status(201).json({
            success: true,
            data: user,
        });
    } else {
        res.status(400).json({
            success: false,
        });
    }
};

export const authenticateUser = async (req: Request, res: Response) => {
    const token = await authenticateUserService(req.body);

    if (token) {
        res.status(200).json({
            success: true,
            token: token,
        });
    } else {
        res.status(401).json({
            success: false,
        });
    }
};
