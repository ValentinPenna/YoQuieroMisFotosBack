import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Obtener el token del encabezado

    if (!token) {
        return res.status(403).json({ error: "Token no proporcionado" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Token inválido" });
        }
        req.userId = (decoded as any).id; // Almacenar el ID del usuario en la solicitud
        next();
    });
}; 