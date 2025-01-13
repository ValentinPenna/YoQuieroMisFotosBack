import { productsService } from "../services/productsService";
import { Request, Response } from "express";

export const productsController = {
    getProducts: async (req:Request, res:Response) => {
        try {
            
            const products = await productsService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getProductById: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const product = await productsService.getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    postProduct: async (req:Request, res:Response) => {
        try {
            const product = req.body
            if(!product.name || !product.price || !product.description || !product.photosNumber) res.status(400).json({error: 'Faltan datos por rellenar'})
            const newProduct = await productsService.postProduct(product);
            res.status(201).json({"Orden Creada": newProduct});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    putProduct: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            const data = req.body
            await productsService.putProduct(id, data);
            res.status(201).json("Orden Actualizada");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteProduct: async (req:Request, res:Response) => {
        try {
            const id = req.params.id
            await productsService.deleteProduct(id);
            res.status(200).json("Orden Eliminada");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}