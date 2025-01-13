import { Order } from "../models/Order";
import IUser from "../utils/interfaceUser";
import IOrder from "../utils/interfaceOrders";
export const ordersService = {
    getOrders: async() => {
        try{
        const orders = await Order.find({});
        return orders;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    getOrderById: async (id:string) => {
        try {
            const order = await Order.findById(id);
            return order;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    postOrder: async (data:IOrder) => {
        try{
            const newOrder = await Order.create(data);
            return newOrder;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    putOrder: async (id:string, data:IOrder) => {
        try{
            const updatedOrder = await Order.findByIdAndUpdate(id, data);
            return updatedOrder;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    deleteOrder: async (id:string) => {
        try{
            const deletedOrder = await Order.findByIdAndDelete(id);
            return deletedOrder;
        } catch (error:any) {
            throw new Error(error);
        }
    }
}