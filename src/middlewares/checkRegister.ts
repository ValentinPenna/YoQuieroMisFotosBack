import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

export const checkRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ error: 'El email ya está registrado' });
            return;
        }
        next();
    } catch (error) {
        res.status(500).json(error);
    }
};
