
import { Product } from "../models/Product";
import IProduct from "../utils/interfaceProducts";
export const productsService = {
    getProducts: async() => {
        try{
        const products = await Product.find({});
        return products;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    getProductById: async (id:string) => {
        try {
            const product = await Product.findById(id);
            return product;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    postProduct: async (data:IProduct) => {
        try{
            const slug = data.name.split(" ").join("-").toLowerCase()
            const newProduct = await Product.create({...data, slug});
            return newProduct;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    putProduct: async (id:string, data:IProduct) => {
        try{
            const updatedProduct = await Product.findByIdAndUpdate(id, data);
            return updatedProduct;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    deleteProduct: async (id:string) => {
        try{
            const deletedProduct = await Product.findByIdAndDelete(id);
            return deletedProduct;
        } catch (error:any) {
            throw new Error(error);
        }
    }
}