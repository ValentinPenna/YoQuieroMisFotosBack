import { ordersService } from "../services/ordersService";
import { Request, Response } from "express";

export const ordersController = {
    getOrders: async (req:Request, res:Response) => {
        try {
            
            const orders = await ordersService.getOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOrderById: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const order = await ordersService.getOrderById(id);
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    postOrder: async (req:Request, res:Response) => {
        try {
            const order = req.body
            if(!order.userId || !order.products || !order.photos || !order.total) res.status(400).json({error: 'Faltan datos por rellenar'})
            const neworder = await ordersService.postOrder(order);
            res.status(201).json({"Orden Creada": neworder});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    putOrder: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const data = req.body
            await ordersService.putOrder(id, data);
            res.status(201).json("Orden Actualizada");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteOrder: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            await ordersService.deleteOrder(id);
            res.status(200).json("Orden Eliminada");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}