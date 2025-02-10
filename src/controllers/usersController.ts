import { usersService } from "../services/usersService";
import { Request, Response } from "express";

export const usersController = {
    getUsers: async (req:Request, res:Response) => {
        try {
            
            const users = await usersService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getUserById: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const user = await usersService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    postUser: async (req:Request, res:Response) => {
        try {
            const user = req.body
            if(!user.name || !user.email || !user.password || !user.lastName) res.status(400).json({error: 'Faltan datos por rellenar'})
            const newUser = await usersService.postUser(user);
            res.status(201).json({newUser});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    loginUser: async (req:Request, res:Response) => {
        try {
            const data = req.body
            const user = await usersService.loginUser(data);
            res.status(200).json({user});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    putUser: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const data = req.body
            await usersService.putUser(id, data);
            res.status(201).json("Usuario Actualizado");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            await usersService.deleteUser(id);
            res.status(200).json("Usuario Eliminado");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}